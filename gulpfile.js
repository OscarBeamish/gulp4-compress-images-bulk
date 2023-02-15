// Gulp Modules
const { src, dest, series, parallel } = require('gulp');

const image = require('gulp-image');

// File paths
const files = {
	bannerSrc: 'assets/300x600/**',
  bannerDest: 'proof/300x600/',
}

// Package, compile and minify Sass
function localisedBannerCompressor() {

  return src(files.bannerSrc)
    .pipe(image({
      optipng: ['-i 1', '-strip all', '-fix', '-o10', '-force'],
      pngquant: ['--quality=40-55', '--speed=1', '--force', 256],
      zopflipng: ['-y', '--lossy_8bit', '--lossy_transparent'],
      jpegRecompress: ['--strip', '--quality', 'medium', '--min', 40, '--max', 80],
      mozjpeg: ['-optimize', '-progressive'],
      gifsicle: ['--optimize'],
      svgo: ['--enable', 'cleanupIDs', '--disable', 'convertColors']
    }))
    .pipe(dest(files.bannerDest))
}

/**
 * Localised Banner Compressor
 * @desc Compress Localised
 */
//  var compressorRegion
//  var compressorTerritory
//  async function localisedBannerCompressor() {
//    if ($localisedBannerCompressor) {
//      for (var i = 0; i < Object.keys(territories).length; i++) {
//        compressorRegion = Object.keys(territories)[i]
//        for (var x = 0; x < Object.values(territories)[i].length; x++) {
//         compressorTerritory = Object.values(territories)[i][x]

//          var locFilesSrc = projPath +'3_Working/1_Psd/' + phase + '/Digital-Output/Core/Rollout/' + compressorRegion + '/' + compressorTerritory +'-assets/' + service + '/'
//          var globalFilesSrc = projPath +'3_Working/1_Psd/_Global/Master-Artwork/Compressed_global_assets/'
//          var destination = projPath +'3_Working/6_HTML/' + phase + '/' + service + '/Rollout/_Compressed/' + compressorRegion + '/' + compressorTerritory + '/'
         
//          banners.forEach(function(bannerSize) {

//           var bannerWidth = bannerSize.substring(0, bannerSize.indexOf('x'));
//           var bannerHeight = bannerSize.substring(bannerSize.indexOf('x') + 1)
//           var bannerPixels = bannerWidth * bannerHeight


//           // Banners equal to or bigger than 300x600
//           if(bannerPixels >= 180000) {
//             if($compressGlobalFiles) {
//               // Copy Global Assets
//               console.log('Compressed Global Assets src:' + globalFilesSrc + bannerSize + '/**')
//               gulp.src([ globalFilesSrc + bannerSize + '/**'])
//                 .pipe(image({
//                   optipng: ['-i 1', '-strip all', '-fix', '-o6', '-force'],
//                   pngquant: ['--speed=1', '--force', '--quality=10', 256],
//                   zopflipng: ['-y', '--lossy_8bit', '--lossy_transparent'],
//                   jpegRecompress: ['--strip', '--quality', 'medium', '--min', 40, '--max', 70],
//                   mozjpeg: ['-optimize', '-progressive'],
//                   gifsicle: ['--optimize'],
//                   svgo: {}
//                 }))
//                 .pipe(gulp.dest(destination + bannerSize + '/'))
//             }

//             if($compressLocFiles) {
//               // Copy Localised Assets
//               console.log('Compresed locFiles src:' + locFilesSrc + bannerSize + '/**')
//               gulp.src([ locFilesSrc + bannerSize + '/**' ])
//               .pipe(image({
//                 optipng: ['-i 1', '-strip all', '-fix', '-o6', '-force'],
//                 pngquant: ['--speed=1', '--force', '--quality=10', 256],
//                 zopflipng: ['-y', '--lossy_8bit', '--lossy_transparent'],
//                 jpegRecompress: ['--strip', '--quality', 'medium', '--min', 40, '--max', 70],
//                 mozjpeg: ['-optimize', '-progressive'],
//                 gifsicle: ['--optimize'],
//                 svgo: {}
//               }))
//                 .pipe(gulp.dest(destination + bannerSize + '/'))
//             }
//           }

//           // Banners less than 300x600 and greater than or equal to 160x600
//           else if(bannerPixels < 180000 && bannerPixels >= 96000) {
//             if($compressGlobalFiles) {
//               // Copy Global Assets
//               console.log('Compresed Global Assets src:' + globalFilesSrc + '/**')
//               gulp.src([ globalFilesSrc + bannerSize + '/**'])
//                 .pipe(image({
//                   optipng: ['-i 1', '-strip all', '-fix', '-o6', '-force'],
//                   pngquant: ['--speed=1', '--force', '--quality=10', 256],
//                   zopflipng: ['-y', '--lossy_8bit', '--lossy_transparent'],
//                   jpegRecompress: ['--strip', '--quality', 'medium', '--min', 90, '--max', 100],
//                   mozjpeg: ['-optimize', '-progressive'],
//                   gifsicle: ['--optimize'],
//                   svgo: {}
//                 }))
//                 .pipe(gulp.dest(destination + bannerSize + '/'))
//             }

//             if($compressLocFiles) {
//               // Copy Localised Assets
//               console.log('Compresed locFiles src:' + locFilesSrc + bannerSize + '/**')
//               gulp.src([ locFilesSrc + bannerSize + '/**' ])
//               .pipe(image({
//                 optipng: ['-i 1', '-strip all', '-fix', '-o6', '-force'],
//                 pngquant: ['--speed=1', '--force', '--quality=10', 256],
//                 zopflipng: ['-y', '--lossy_8bit', '--lossy_transparent'],
//                 jpegRecompress: ['--strip', '--quality', 'medium', '--min', 70, '--max', 90],
//                 mozjpeg: ['-optimize', '-progressive'],
//                 gifsicle: ['--optimize'],
//                 svgo: {}
//               }))
//                 .pipe(gulp.dest(destination + bannerSize + '/'))
//             }
//           }

//           // Banners less than 160x600 and greater than or equal to 728x90
//           else if(bannerPixels < 96000 && bannerPixels >= 65520) {
//             if($compressGlobalFiles) {
//               // Copy Global Assets
//               console.log('Compresed Global Assets src:' + globalFilesSrc + '/**')
//               gulp.src([ globalFilesSrc + bannerSize + '/**' ])
//                 .pipe(image({
//                   zopflipng: ['-y', '--lossy_8bit', '--lossy_transparent'],
//                   jpegRecompress: ['--strip', '--quality', 'medium', '--min', 100, '--max', 100],
//                   mozjpeg: ['-optimize', '-progressive'],
//                   gifsicle: ['--optimize'],
//                   svgo: {}
//                 }))
//                 .pipe(gulp.dest(destination + bannerSize + '/'))
//             }

//             if($compressLocFiles) {
//               // Copy Localised Assets
//               console.log('Compresed locFiles src:' + locFilesSrc + bannerSize + '/**')
//               gulp.src([ locFilesSrc + bannerSize + '/**' ])
//               .pipe(image({
//                 optipng: ['-i 1', '-strip all', '-fix', '-o6', '-force'],
//                 pngquant: ['--speed=1', '--force', '--quality=10', 256],
//                 zopflipng: ['-y', '--lossy_8bit', '--lossy_transparent'],
//                 jpegRecompress: ['--strip', '--quality', 'medium', '--min', 70, '--max', 90],
//                 mozjpeg: ['-optimize', '-progressive'],
//                 gifsicle: ['--optimize'],
//                 svgo: {}
//               }))
//                 .pipe(gulp.dest(destination + bannerSize + '/'))
//             }
//           }

//           // Banners less than 728x90 (Mobile banners)
//           else if(bannerPixels < 65520) {
//             if($compressGlobalFiles) {
//               // Copy Global Assets
//               console.log('Compresed Global Assets src:' + globalFilesSrc + '/**')
//               gulp.src([ globalFilesSrc + bannerSize + '/**'])
//                 .pipe(image({
//                   zopflipng: ['-y', '--lossy_8bit', '--lossy_transparent'],
//                   jpegRecompress: ['--strip', '--quality', 'high', '--min', 100, '--max', 100],
//                   mozjpeg: ['-optimize', '-progressive'],
//                   gifsicle: ['--optimize'],
//                   svgo: {}
//                 }))
//                 .pipe(gulp.dest(destination + bannerSize + '/'))
//             }

//             if($compressLocFiles) {
//               // Copy Localised Assets
//               console.log('Compresed locFiles src:' + locFilesSrc + bannerSize + '/**')
//               gulp.src([ locFilesSrc + bannerSize + '/**' ])
//               .pipe(image({
//                 zopflipng: ['-y', '--lossy_8bit', '--lossy_transparent'],
//                 jpegRecompress: ['--strip', '--quality', 'high', '--min', 100, '--max', 100],
//                 mozjpeg: ['-optimize', '-progressive'],
//                 gifsicle: ['--optimize'],
//                 svgo: {}
//               }))
//                 .pipe(gulp.dest(destination + bannerSize + '/'))
//             }
//           }

//           // Backups
//           if($backups) {
//             // Copy Backups Assets
//             console.log('Compresed backups src:' + locFilesSrc + 'backups/**')
//             gulp.src([ locFilesSrc + 'backups/**' ])
//               .pipe(image({
//                 optipng: ['-i 1', '-strip all', '-fix', '-o6', '-force'],
//                 pngquant: ['--speed=1', '--force', '--quality=10', 256],
//                 zopflipng: ['-y', '--lossy_8bit', '--lossy_transparent'],
//                 jpegRecompress: ['--strip', '--quality', 'medium', '--min', 30, '--max', 40],
//                 mozjpeg: ['-optimize', '-progressive'],
//                 gifsicle: ['--optimize'],
//                 svgo: {}
//               }))
//               .pipe(gulp.dest(destination + '/backups/'))
//           }
//         })
//       }
//     }
//   }
// }

exports.default = series(localisedBannerCompressor)