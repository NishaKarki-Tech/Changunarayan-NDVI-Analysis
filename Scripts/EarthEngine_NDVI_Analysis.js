// =======================================
// Changunarayan Sentinel-2 NDVI using SCL masking
// =======================================


// 1. Import Changunarayan boundary

var Changunarayan = ee.FeatureCollection(
  "projects/nishaprecisionagriculture/assets/Changunarayan"
);


Map.centerObject(Changunarayan, 12);


// Boundary

Map.addLayer(
  Changunarayan.style({
    color: 'red',
    fillColor: '00000000',
    width: 3
  }),
  {},
  'Changunarayan Boundary'
);


// =======================================
// 2. Sentinel-2 SCL cloud masking function
// =======================================


function maskS2clouds(image) {

  var scl = image.select('SCL');

  // Keep:
  // 4 = vegetation
  // 5 = bare soil
  // 6 = water
  // 7 = unclassified

  var mask = scl.eq(4)
      .or(scl.eq(5))
      .or(scl.eq(6))
      .or(scl.eq(7));

  return image.updateMask(mask);
}


// =======================================
// 3. Monthly NDVI function
// =======================================


function monthlyNDVI(year, month) {

  var start = ee.Date.fromYMD(
    year,
    month,
    1
  );

  var end = start.advance(
    1,
    'month'
  );


  var monthly = ee.ImageCollection(
    'COPERNICUS/S2_SR_HARMONIZED'
  )
  .filterBounds(Changunarayan)
  .filterDate(start, end)
  .map(maskS2clouds)
  .median()
  .clip(Changunarayan);


  var ndvi = monthly
    .normalizedDifference([
      'B8',
      'B4'
    ])
    .rename('NDVI');


  Map.addLayer(
    ndvi,
    {
      min:0,
      max:1,
      palette:[
        'brown',
        'yellow',
        'green',
        'darkgreen'
      ]
    },
    'NDVI ' + year + '-' + month
  );

}


// =======================================
// 4. Display monthly NDVI maps
// =======================================


monthlyNDVI(2025,6);

monthlyNDVI(2025,7);

monthlyNDVI(2025,8);

monthlyNDVI(2025,9);
// Generate NDVI maps for all months in 2025

var months = ee.List.sequence(1,12);

months.evaluate(function(monthList){

  monthList.forEach(function(m){

    monthlyNDVI(2025, m);

  });

});
// Generate NDVI maps for all months in 2025

var months = ee.List.sequence(1,12);

months.evaluate(function(monthList){

  monthList.forEach(function(m){

    monthlyNDVI(2025, m);

  });

});
// =======================================
// Monthly NDVI trend chart
// =======================================

var monthlyCollection = ee.ImageCollection.fromImages(
  ee.List.sequence(1,12).map(function(m){

    var start = ee.Date.fromYMD(2025, m, 1);
    var end = start.advance(1, 'month');

    var image = ee.ImageCollection(
      'COPERNICUS/S2_SR_HARMONIZED'
    )
    .filterBounds(Changunarayan)
    .filterDate(start, end)
    .map(maskS2clouds)
    .median()
    .clip(Changunarayan);

    var ndvi = image
      .normalizedDifference(['B8','B4'])
      .rename('NDVI');

    return ndvi.set(
      'system:time_start',
      start.millis()
    );

  })
);


// Create chart

var chart = ui.Chart.image.series({
  imageCollection: monthlyCollection,
  region: Changunarayan,
  reducer: ee.Reducer.mean(),
  scale: 10
})
.setOptions({
  title: 'Monthly NDVI Trend - Changunarayan 2025',
  vAxis: {title:'NDVI'},
  hAxis: {title:'Month'},
  lineWidth: 3,
  pointSize: 5
});


print(chart);
// =======================================
// Export Monthly NDVI values as CSV
// =======================================

var monthlyNDVI_values = ee.FeatureCollection(
  ee.List.sequence(1,12).map(function(m){

    var start = ee.Date.fromYMD(2025,m,1);
    var end = start.advance(1,'month');

    var image = ee.ImageCollection(
      'COPERNICUS/S2_SR_HARMONIZED'
    )
    .filterBounds(Changunarayan)
    .filterDate(start,end)
    .map(maskS2clouds)
    .median()
    .clip(Changunarayan);


    var ndvi = image
      .normalizedDifference(['B8','B4'])
      .rename('NDVI');


    var mean = ndvi.reduceRegion({
      reducer: ee.Reducer.mean(),
      geometry: Changunarayan,
      scale: 10,
      maxPixels: 1e9
    });


    return ee.Feature(null,{
      'Month': m,
      'Mean_NDVI': mean.get('NDVI')
    });

  })
);


print('Monthly NDVI Values', monthlyNDVI_values);


// Export CSV

Export.table.toDrive({
  collection: monthlyNDVI_values,
  description: 'Changunarayan_NDVI_2025_Final',
  folder: 'EarthEngine_Exports',
  fileNamePrefix: 'Changunarayan_NDVI_2025_Final',
  fileFormat: 'CSV'
});
// ===============================
// Winter NDVI (January–February)
// ===============================

var winter = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
  .filterBounds(Changunarayan)
  .filterDate('2025-01-01', '2025-03-01')
  .map(maskS2clouds)
  .median()
  .clip(Changunarayan);

var winterNDVI = winter.normalizedDifference(['B8', 'B4']);

Map.addLayer(
  winterNDVI,
  {
    min: 0,
    max: 1,
    palette: ['brown', 'yellow', 'green', 'darkgreen']
  },
  'Winter NDVI'
);
Export.image.toDrive({
  image: winterNDVI,
  description: 'Winter_NDVI_2025',
  folder: 'EarthEngine_Exports',
  fileNamePrefix: 'Winter_NDVI_2025',
  region: Changunarayan.geometry(),
  scale: 10,
  maxPixels: 1e13
});
// ===============================
// Pre-monsoon NDVI (March–May)
// ===============================

var preMonsoon = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
  .filterBounds(Changunarayan)
  .filterDate('2025-03-01', '2025-06-01')
  .map(maskS2clouds)
  .median()
  .clip(Changunarayan);

var preMonsoonNDVI = preMonsoon.normalizedDifference(['B8', 'B4']);

Map.addLayer(
  preMonsoonNDVI,
  {
    min: 0,
    max: 1,
    palette: ['brown', 'yellow', 'green', 'darkgreen']
  },
  'Pre-monsoon NDVI'
);

Export.image.toDrive({
  image: preMonsoonNDVI,
  description: 'PreMonsoon_NDVI_2025',
  folder: 'EarthEngine_Exports',
  fileNamePrefix: 'PreMonsoon_NDVI_2025',
  region: Changunarayan.geometry(),
  scale: 10,
  maxPixels: 1e13
});
// ===============================
// Monsoon NDVI (June–September)
// ===============================

var monsoon = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
  .filterBounds(Changunarayan)
  .filterDate('2025-06-01', '2025-10-01')
  .map(maskS2clouds)
  .median()
  .clip(Changunarayan);

var monsoonNDVI = monsoon.normalizedDifference(['B8', 'B4']);

Map.addLayer(
  monsoonNDVI,
  {
    min: 0,
    max: 1,
    palette: ['brown', 'yellow', 'green', 'darkgreen']
  },
  'Monsoon NDVI'
);

Export.image.toDrive({
  image: monsoonNDVI,
  description: 'Monsoon_NDVI_2025',
  folder: 'EarthEngine_Exports',
  fileNamePrefix: 'Monsoon_NDVI_2025',
  region: Changunarayan.geometry(),
  scale: 10,
  maxPixels: 1e13
});
// ===============================
// Post-monsoon NDVI (October–December)
// ===============================

var postMonsoon = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
  .filterBounds(Changunarayan)
  .filterDate('2025-10-01', '2026-01-01')
  .map(maskS2clouds)
  .median()
  .clip(Changunarayan);

var postMonsoonNDVI = postMonsoon.normalizedDifference(['B8', 'B4']);

Map.addLayer(
  postMonsoonNDVI,
  {
    min: 0,
    max: 1,
    palette: ['brown', 'yellow', 'green', 'darkgreen']
  },
  'Post-monsoon NDVI'
);

Export.image.toDrive({
  image: postMonsoonNDVI,
  description: 'PostMonsoon_NDVI_2025',
  folder: 'EarthEngine_Exports',
  fileNamePrefix: 'PostMonsoon_NDVI_2025',
  region: Changunarayan.geometry(),
  scale: 10,
  maxPixels: 1e13
});