$(document).ready(function(){ //function created
   //funtion when clicked
    $.getJSON('https://www.e-solat.gov.my/index.php?r=esolatApi/TakwimSolat&period=today&zone=SGR01', function(kereta) {
                  $('#date').html( kereta.prayerTime[0].date ); //call object kereta and car array num 1 for brand
                  $('#day').html( kereta.prayerTime[0].day ); //call object kereta and car array num 1 for brand
                  $('#imsk').html( kereta.prayerTime[0].imsak ); //call object kereta and car array num 1 for brand
                  $('#fajr').html( kereta.prayerTime[0].fajr ); //call object kereta and car array num 1 for brand
                  $('#syuruk').html( kereta.prayerTime[0].syuruk ); //call object kereta and car array num 1 for brand
                  $('#dhur').html( kereta.prayerTime[0].dhuhr ); //call object kereta and car array num 1 for brand
                  $('#asar').html( kereta.prayerTime[0].asr ); //call object kereta and car array num 1 for brand
                  $('#mahgrib').html( kereta.prayerTime[0].maghrib ); //call object kereta and car array num 1 for brand
                  $('#isyak').html( kereta.prayerTime[0].isha ); //call object kereta and car array num 1 for brand


  });
});
