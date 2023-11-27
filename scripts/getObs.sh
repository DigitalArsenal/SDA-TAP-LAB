curl -X 'POST' \
  'https://services.sdataplab.com/retrieve/elastic/data/erudition_misc_report_oct_scenario_b3_obs' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "query": {
    "range": {
      "startTimestamp": {
        "gte": "2020-11-01T21:22:54",
        "lte": "2023-11-21T22:22:54"
      }
    }
  }
}'