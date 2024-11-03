require "uri"
require "algolia"

# Fetch sample dataset
uri = URI("https://dashboard.algolia.com/sample_datasets/movie.json")
response = Net::HTTP.get_response(uri)
movies = JSON.parse(response.body)

# Connect and authenticate with your Algolia app
client = Algolia::SearchClient.create("N9TTQ38R4A", "5887fc8b4d5bca8d997f884bdbedae1d")

# Save records in Algolia index
client.save_objects("movies_index", movies)

puts("Done!")
