# Real sample data

Downloaded 2026-10-15. No sampling or imputation applied to the bundled tables. Original row order retained. Metadata columns excluded before clustering; no ground-truth labels bundled.

## Penguin field study · real data
Gorman, Williams & Fraser (2014); Palmer Station LTER; palmerpenguins by Horst, Hill & Gorman. CC0. https://allisonhorst.github.io/palmerpenguins/

344 penguins measured in the Palmer Archipelago, Antarctica (2007–2009). Investigate which body measurements vary together. Two records have missing measurements. Species, island, sex, and year are omitted from this classroom copy: clusters are not species predictions. This regional sample does not represent all penguins.

## Cars & fuel use · real data
Quinlan, R. (1993). Auto MPG. UCI Machine Learning Repository. DOI: 10.24432/C5859H. CC BY 4.0. Adapted by selecting columns, renaming headers, and preserving missing values. https://archive.ics.uci.edu/dataset/9/auto+mpg

398 vehicle records from model years 1970–1982. Compare fuel use, engine size, power, weight, and acceleration time. Six horsepower values are missing. Origin codes, model year, and cylinder counts are omitted from this classroom copy. MPG is a grouping feature here, not a value the model predicts. This historical sample does not describe today’s vehicles or electric cars.

Upstream file SHA256:
f204db2c753b0937caac3cb35258562c14f073e4bbc76be24b4c51ce22767a93 penguins.csv
5fc1507522b73b8050d3aa45df51eefe1b666ae5f428a5f1347b6483339f1003 auto-mpg.zip

CC BY 4.0 license: https://creativecommons.org/licenses/by/4.0/
Palmer data CC0: https://creativecommons.org/publicdomain/zero/1.0/
Kaggle discovery: https://www.kaggle.com/datasets/uciml/autompg-dataset

## Singapore air quality
National Environment Agency (2025), Historical Pollutant Standards Index (PSI) (2024), data.gov.sg. Singapore Open Data Licence. Retrieved 26 October 2026; classroom extract of first 500 available Central-region records, source row order retained; columns selected and renamed, no imputation. https://data.gov.sg/datasets/d_9213cd2e4631f7148ab5932a10df9958/view

500 available hourly records from the Central region, 1–22 January 2024 (SGT). Each row is one published observation, with different averaging periods shown in the feature names—not five instantaneous measurements. Missing cells and gaps in timestamps are preserved. This short, single-region extract does not represent all of Singapore or a full year. PM2.5 and PM10 overlap in what they measure. Clusters are exploratory patterns, not official PSI bands, forecasts, or health advice. CO is omitted because many values are missing; PSI, sub-indices, coordinates and region codes are excluded.

Source response SHA256: e6e2ffb0c0b512481d091a428dd85b152e320be81e38b7411c0d85f417d12598
Source response retained in tests/air-source.json. Exact API request: https://data.gov.sg/api/action/datastore_search?resource_id=d_9213cd2e4631f7148ab5932a10df9958&limit=500&filters=%7B%22region%22%3A%22central%22%7D
