# Changunarayan-NDVI-Analysis
Seasonal NDVI analysis of Changunarayan Municipality, Nepal, using Sentinel-2 imagery, Google Earth Engine, ArcGIS Pro, and Python.
# Seasonal NDVI Analysis of Changunarayan Municipality Using Sentinel-2 Imagery

## Project Overview

This project analyzes seasonal vegetation dynamics in Changunarayan Municipality, Bhaktapur District, Nepal, using Sentinel-2 satellite imagery and the Normalized Difference Vegetation Index (NDVI). Google Earth Engine was used for satellite image processing, ArcGIS Pro for map production, and Python for visualization and data analysis.

---

## Objectives

- Calculate monthly NDVI values for 2025.
- Analyze seasonal vegetation dynamics.
- Compare NDVI among Winter, Pre-monsoon, Monsoon, and Post-monsoon seasons.
- Produce publication-quality maps and figures.

---

## Study Area

Changunarayan Municipality, Bhaktapur District, Nepal.

---

## Data Source

- Sentinel-2 Surface Reflectance Harmonized (COPERNICUS/S2_SR_HARMONIZED)
- Spatial Resolution: 10 m
- Study Year: 2025

---

## Software Used

- Google Earth Engine
- ArcGIS Pro
- Python
- Google Colab

---

## Methodology

1. Imported the municipal boundary into Google Earth Engine.
2. Applied Scene Classification Layer (SCL) cloud masking.
3. Calculated monthly NDVI.
4. Computed seasonal NDVI composites.
5. Exported seasonal rasters.
6. Created publication-quality maps in ArcGIS Pro.
7. Generated NDVI charts using Python.

---

## Seasonal Mean NDVI

| Season | Mean NDVI |
|--------|----------:|
| Winter | 0.4436 |
| Pre-monsoon | 0.4571 |
| Monsoon | 0.6242 |
| Post-monsoon | 0.5293 |

The highest vegetation greenness was observed during the monsoon season, while the lowest NDVI values occurred during winter.

---

# Project Outputs

## Monthly NDVI Trend

![Monthly NDVI Trend](Figures/Monthly_NDVI_Trend.png.png)

---

## Seasonal NDVI Comparison

![Seasonal NDVI Comparison](Figures/Seasonal_NDVI_Comparison.png.png)

---

## Winter NDVI (2025)

![Winter NDVI](Maps/Winter_NDVI_2025.png.png)

---

## Pre-monsoon NDVI (2025)

![Pre-monsoon NDVI](Maps/PreMonsoon_NDVI_2025.png.png)

---

## Monsoon NDVI (2025)

![Monsoon NDVI](Maps/Monsoon_NDVI_2025.png.png)

---

## Post-monsoon NDVI (2025)

![Post-monsoon NDVI](Maps/PostMonsoon_NDVI_2025.png.png)

---

## Repository Structure

```text
Changunarayan-NDVI-Analysis/
│
├── Changunarayan_boundary/
├── Data/
├── Figures/
├── Maps/
├── Scripts/
└── README.md
```

---

## Author

**Nisha Karki**

B.Sc. Horticulture

Precision Agriculture | Remote Sensing | GIS | Google Earth Engine | ArcGIS Pro | Python
