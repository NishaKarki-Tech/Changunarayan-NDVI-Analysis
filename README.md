Seasonal NDVI Analysis of Changunarayan Municipality Using Sentinel-2 Imagery

Seasonal vegetation analysis of Changunarayan Municipality, Bhaktapur District, Nepal, using Sentinel-2 satellite imagery, Google Earth Engine, ArcGIS Pro, and Python.

Project Overview

This project analyzed seasonal vegetation dynamics in Changunarayan Municipality using the Normalized Difference Vegetation Index (NDVI) derived from Sentinel-2 Surface Reflectance imagery. Google Earth Engine was used for satellite image processing and cloud masking, ArcGIS Pro for mapping, and Python for data visualization.

Objectives
Calculate monthly NDVI for 2025.
Generate seasonal NDVI composites.
Compare NDVI patterns across Winter, Pre-monsoon, Monsoon, and Post-monsoon seasons.
Visualize seasonal vegetation patterns using maps and charts.
Study Area

Location: Changunarayan Municipality, Bhaktapur District, Nepal

Data Source
Satellite: Sentinel-2
Dataset: Sentinel-2 Surface Reflectance Harmonized (COPERNICUS/S2_SR_HARMONIZED)
Spatial Resolution: 10 m
Study Period: January–December 2025
Software and Tools
Google Earth Engine
ArcGIS Pro
Python
Google Colab
Methodology
Imported the Changunarayan municipal boundary into Google Earth Engine.
Applied Scene Classification Layer (SCL) masking to reduce cloud contamination.
Calculated monthly NDVI from Sentinel-2 imagery.
Generated seasonal NDVI composites:
Winter: January–February
Pre-monsoon: March–May
Monsoon: June–September
Post-monsoon: October–December
Exported seasonal NDVI rasters.
Created seasonal NDVI maps in ArcGIS Pro.
Generated monthly and seasonal NDVI visualizations using Python.
Results
Seasonal Mean NDVI
Season	Mean NDVI
Winter	0.4436
Pre-monsoon	0.4571
Monsoon	0.6242
Post-monsoon	0.5293

Mean NDVI was highest during the monsoon season (0.6242) and lowest during winter (0.4436), showing seasonal variation in vegetation conditions across the study area.

Project Outputs
Monthly NDVI Trend




Seasonal NDVI Comparison




Winter NDVI (2025)




Pre-monsoon NDVI (2025)




Monsoon NDVI (2025)




Post-monsoon NDVI (2025)




Repository Structure
Changunarayan-NDVI-Analysis/
│
├── Changunarayan_boundary/
│   ├── Changunarayan.cpg
│   ├── Changunarayan.dbf
│   ├── Changunarayan.prj
│   ├── Changunarayan.shp
│   └── Changunarayan.shx
│
├── Data/
│   └── Changunarayan_NDVI_2025_Final.csv
│
├── Figures/
│   ├── Monthly_NDVI_Trend.png.png
│   └── Seasonal_NDVI_Comparison.png.png
│
├── Maps/
│   ├── Changunarayan_NDVI_Project.atbx
│   ├── Winter_NDVI_2025.png.png
│   ├── PreMonsoon_NDVI_2025.png.png
│   ├── Monsoon_NDVI_2025.png.png
│   └── PostMonsoon_NDVI_2025.png.png
│
├── Scripts/
│   ├── Changunarayan_NDVI_Analysis.ipynb
│   └── EarthEngine_NDVI_Analysis.js
│
└── README.md
Skills Demonstrated
Sentinel-2 imagery processing
NDVI analysis
Google Earth Engine
GIS and ArcGIS Pro
Python data visualization
Satellite-based vegetation analysis
Spatial data visualization
Author

Nisha Karki

B.Sc. Horticulture

Research Interests
Precision Agriculture
Remote Sensing
Geographic Information Systems (GIS)
Plant Phenotyping
