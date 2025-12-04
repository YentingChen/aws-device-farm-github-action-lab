import unittest
import boto3
import selenium
import logging
logging.basicConfig(level=logging.DEBUG)
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.keys import Keys
import time
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC

class PythonOrgSearch(unittest.TestCase):
    
    website_url = "https://aws.amazon.com/blogs/"
    search_box_path = "input[role='searchbox']"
    card_title_path = "div.m-card-title"
    

    def setUp(self):
        devicefarm_client = boto3.client("devicefarm",region_name='us-west-2')
        self.testgrid_url_response = devicefarm_client.create_test_grid_url(projectArn="arn:aws:devicefarm:us-west-2:123456789:testgrid-project:e3xxx-4xx-8xxe-5xxxxcxx9",expiresInSeconds=300)
        desired_capabilities = selenium.webdriver.DesiredCapabilities.FIREFOX
        self.driver = selenium.webdriver.Remote(self.testgrid_url_response["url"], desired_capabilities)
        
            
    def test_enter_text_and_click(self):  
        driver = self.driver
        driver.get(self.website_url)
        wait = WebDriverWait(driver, 10)
        driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        time.sleep(2)
        label = wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, "label[for='awsf-filtered-posts-category-alexa']")))
        checkbox = driver.find_element_by_id("awsf-filtered-posts-category-application-integration")
        checkbox.click()
        time.sleep(3)
        # Wait for the page to load
        wait = WebDriverWait(driver, 10)
        time.sleep(2)
        
        # Find the div element with class "m-card-title"
        card_title_div = wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, "div.m-card-title")))
        
        # Find the link element within the div
        link_element = card_title_div.find_element(By.TAG_NAME, "a")
        
        # Click on the link
        link_element.click()
        
        # Wait for the new page to load (adjust the wait time as needed)
        wait.until(EC.new_window_is_opened)
        
        # Switch to the new window
        driver.switch_to.window(driver.window_handles[-1])
        
        time.sleep(5)
        
        # scroll down the website
        driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        time.sleep(2)

    def tearDown(self):
        self.driver.quit()
        

        
if __name__ == "__main__":
    unittest.main()