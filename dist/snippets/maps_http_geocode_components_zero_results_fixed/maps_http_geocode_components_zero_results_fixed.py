# [START maps_http_geocode_components_zero_results_fixed]
import requests

url = "https://maps.googleapis.com/maps/api/geocode/json?components=components%3Droute%3AAnnankatu%7Cadministrative_area%3AHelsinki%7Ccountry%3AFinland&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_geocode_components_zero_results_fixed]