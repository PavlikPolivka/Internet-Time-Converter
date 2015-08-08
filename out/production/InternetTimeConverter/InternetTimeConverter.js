(function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    main: function (args) {
      var now = new _.com.ppolivka.time.Time(new Date(), jstz.determine());
      _.com.ppolivka.browser.E.object.hour.value(now.hour.toString());
      _.com.ppolivka.browser.E.object.minute.value(now.minute.toString());
      _.com.ppolivka.browser.E.object.second.value(now.second.toString());
      _.com.ppolivka.browser.E.object.beats.value(now.toBeats().toString());
      _.com.ppolivka.browser.E.object.test.value('ne');
    },
    com: Kotlin.definePackage(null, /** @lends _.com */ {
      ppolivka: Kotlin.definePackage(null, /** @lends _.com.ppolivka */ {
        browser: Kotlin.definePackage(null, /** @lends _.com.ppolivka.browser */ {
          E: Kotlin.createEnumClass(function () {
            return [Kotlin.Enum];
          }, function $fun(e) {
            $fun.baseInitializer.call(this);
            this.element = e;
          }, function () {
            return {
              hour: new _.com.ppolivka.browser.E(document.getElementById('hour')),
              minute: new _.com.ppolivka.browser.E(document.getElementById('minute')),
              second: new _.com.ppolivka.browser.E(document.getElementById('second')),
              beats: new _.com.ppolivka.browser.E(document.getElementById('beats')),
              test: new _.com.ppolivka.browser.E(document.getElementById('test'))
            };
          }, /** @lends _.com.ppolivka.browser.E.prototype */ {
            value: function (value) {
              var tmp$0, tmp$1;
              (tmp$0 = this.element) != null ? tmp$0.setAttribute('value', value) : null;
              (tmp$1 = this.element) != null ? (tmp$1.innerHTML = value) : null;
            }
          })
        }),
        time: Kotlin.definePackage(null, /** @lends _.com.ppolivka.time */ {
          Time: Kotlin.createClass(null, function (now, zone) {
            this.date = now;
            this.year = this.date.getFullYear();
            this.month = this.date.getMonth() + 1;
            this.day = this.date.getDate();
            this.hour = this.date.getHours();
            this.minute = this.date.getMinutes();
            this.second = this.date.getSeconds();
            this.zone = zone;
          }, /** @lends _.com.ppolivka.time.Time.prototype */ {
            fromDate_c8xjg6$: function (time, zone) {
              this.date = time;
              this.year = this.date.getFullYear();
              this.month = this.date.getMonth() + 1;
              this.day = this.date.getDate();
              this.hour = this.date.getHours();
              this.minute = this.date.getMinutes();
              this.second = this.date.getSeconds();
            },
            fromBeats_aungbq$: function (beats, zone) {
              var tmp$0, tmp$1;
              var seconds = (tmp$1 = (tmp$0 = Kotlin.safeParseDouble(beats)) != null ? tmp$0 / 0.011574 : null) != null ? tmp$1 : Kotlin.throwNPE();
              var time = new _.com.ppolivka.time.Time(new Date(), zone);
              time.hour = Math.floor(seconds / 3600);
              time.minute = Math.floor((seconds - time.hour * 3600) / 60);
              time.second = Math.floor(seconds % 60);
              return time;
            },
            toUTC: function () {
              var zoneName = this.zone.name();
              var utc = (new moment()).tz(this.year.toString() + this.month + this.day + ' ' + this.hour + this.minute + this.second, 'yyyyMMdd hhmmss', zoneName).tz('UTC');
              return new _.com.ppolivka.time.Time(utc.toDate(), this.zone);
            },
            toBeats: function () {
              var utc = this.toUTC();
              var beats = (utc.second + utc.minute * 60 + (utc.hour + 1) * 3600) / 86.4;
              return beats;
            }
          }),
          TimeZone: Kotlin.createClass(null, function () {
            this.zones = new Kotlin.DefaultPrimitiveHashMap();
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('Etc/GMT+12', -720));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('Pacific/Pago_Pago', -660));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('Pacific/Apia', -660));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('America/Adak', -600));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('Pacific/Honolulu', -600));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('Pacific/Marquesas', -570));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('Pacific/Gambier', -540));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('America/Anchorage', -540));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('America/Los_Angeles', -480));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('Pacific/Pitcairn', -480));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('America/Phoenix', -420));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('America/Denver', -420));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('America/Guatemala', -360));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('America/Chicago', -360));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('Pacific/Easter', -360));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('America/Bogota', -300));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('America/New_York', -300));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('America/Caracas', -270));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('America/Halifax', -240));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('America/Santo_Domingo', -240));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('America/Santiago', -240));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('America/St_Johns', -210));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('America/Godthab', -180));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('America/Argentina_Buenos', -180));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('America/Montevideo', -180));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('America/Noronha', -120));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('America/Noronha', -120));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('Atlantic/Azores', -60));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('Atlantic/Cape_Verde', -60));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('UTC', 0));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('Europe/London', 0));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('Europe/Berlin', 60));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('Africa/Lagos', 60));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('Africa/Windhoek', 60));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('Asia/Beirut', 120));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('Africa/Johannesburg', 120));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('Asia/Baghdad', 180));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('Europe/Moscow', 180));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('Asia/Tehran', 210));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('Asia/Dubai', 240));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('Asia/Baku', 240));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('Asia/Kabul', 270));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('Asia/Yekaterinburg', 300));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('Asia/Karachi', 300));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('Asia/Kolkata', 330));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('Asia/Kathmandu', 345));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('Asia/Dhaka', 360));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('Asia/Omsk', 360));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('Asia/Rangoon', 390));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('Asia/Krasnoyarsk', 420));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('Asia/Jakarta', 420));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('Asia/Shanghai', 480));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('Asia/Irkutsk', 480));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('Australia/Eucla', 525));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('Asia/Yakutsk', 540));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('Asia/Tokyo', 540));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('Australia/Darwin', 570));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('Australia/Adelaide', 570));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('Australia/Brisbane', 600));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('Asia/Vladivostok', 600));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('Australia/Sydney', 600));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('Asia/Kamchatka', 660));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('Pacific/Noumea', 660));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('Pacific/Norfolk', 690));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('Pacific/Auckland', 720));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('Pacific/Majuro', 720));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('Pacific/Chatham', 765));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('Pacific/Tongatapu', 780));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('Pacific/Apia', 780));
            Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.zones, new Kotlin.modules['stdlib'].kotlin.Pair('Pacific/Kiritimati', 840));
          })
        })
      })
    })
  });
  Kotlin.defineModule('InternetTimeConverter', _);
  _.main([]);
}(Kotlin));

//@ sourceMappingURL=InternetTimeConverter.js.map
