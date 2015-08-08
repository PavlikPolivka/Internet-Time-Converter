(function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    com: Kotlin.definePackage(null, /** @lends _.com */ {
      ppolivka: Kotlin.definePackage(function () {
        this.zone = jstz.determine().name();
        this.dateTime = _.com.ppolivka.time.Time_cxhy00$(undefined, new Date(), _.com.ppolivka.zone);
      }, /** @lends _.com.ppolivka */ {
        main: function (args) {
          _.com.ppolivka.render();
          _.com.ppolivka.browser.Field.object.beats.change(_.com.ppolivka.beatsChange);
          _.com.ppolivka.browser.Field.object.hour.change(_.com.ppolivka.timeChange);
          _.com.ppolivka.browser.Field.object.minute.change(_.com.ppolivka.timeChange);
          _.com.ppolivka.browser.Field.object.second.change(_.com.ppolivka.timeChange);
        },
        beatsChange: function (event) {
          var tmp$0;
          var beats = (tmp$0 = _.com.ppolivka.browser.Field.object.beats.value()) != null ? tmp$0 : '0';
          _.com.ppolivka.dateTime = _.com.ppolivka.time.Time.object.timeFromBeats(beats, _.com.ppolivka.zone);
          _.com.ppolivka.render();
        },
        timeChange: function (event) {
          _.com.ppolivka.dateTime.hour = _.com.ppolivka.browser.Field.object.hour.intValue();
          _.com.ppolivka.dateTime.minute = _.com.ppolivka.browser.Field.object.minute.intValue();
          _.com.ppolivka.dateTime.second = _.com.ppolivka.browser.Field.object.second.intValue();
          _.com.ppolivka.render();
        },
        render: function () {
          _.com.ppolivka.browser.Field.object.hour.value_1(_.com.ppolivka.dateTime.hour.toString());
          _.com.ppolivka.browser.Field.object.minute.value_1(_.com.ppolivka.dateTime.minute.toString());
          _.com.ppolivka.browser.Field.object.second.value_1(_.com.ppolivka.dateTime.second.toString());
          _.com.ppolivka.browser.Field.object.beats.value_1(_.com.ppolivka.dateTime.toBeats().toString());
        },
        browser: Kotlin.definePackage(null, /** @lends _.com.ppolivka.browser */ {
          Field: Kotlin.createEnumClass(function () {
            return [Kotlin.Enum];
          }, function $fun(e) {
            $fun.baseInitializer.call(this);
            this.element = e;
          }, function () {
            return {
              hour: new _.com.ppolivka.browser.Field(document.getElementById('hour')),
              minute: new _.com.ppolivka.browser.Field(document.getElementById('minute')),
              second: new _.com.ppolivka.browser.Field(document.getElementById('second')),
              beats: new _.com.ppolivka.browser.Field(document.getElementById('beats')),
              test: new _.com.ppolivka.browser.Field(document.getElementById('test'))
            };
          }, /** @lends _.com.ppolivka.browser.Field.prototype */ {
            value: function () {
              var tmp$0;
              return (tmp$0 = this.element) != null ? tmp$0.value : null;
            },
            value_1: function (v) {
              var tmp$0;
              (tmp$0 = this.element) != null ? (tmp$0.value = v) : null;
            },
            intValue: function () {
              var tmp$0;
              return parseInt((tmp$0 = this.value()) != null ? tmp$0 : '0');
            },
            change: function (callback) {
              var tmp$0;
              (tmp$0 = this.element) != null ? tmp$0.addEventListener('keyup', callback) : null;
            }
          })
        }),
        time: Kotlin.definePackage(null, /** @lends _.com.ppolivka.time */ {
          Time: Kotlin.createClass(null, function () {
            this.year = 1971;
            this.month = 1;
            this.day = 1;
            this.hour = 0;
            this.minute = 0;
            this.second = 0;
            this.zone = 'UTC';
          }, /** @lends _.com.ppolivka.time.Time.prototype */ {
            toMoment: function () {
              return moment.tz(this.year.toString() + this.normalize(this.month) + this.normalize(this.day) + ' ' + this.normalize(this.hour) + this.normalize(this.minute) + this.normalize(this.second), 'YYYYMMDD hhmmss', this.zone);
            },
            convertZone_61zpoe$: function (timeZone) {
              var converted = this.toMoment().tz(timeZone);
              return _.com.ppolivka.time.Time_55wt5a$(undefined, converted, timeZone);
            },
            toBeats: function () {
              var utc = this.convertZone_61zpoe$('UTC');
              var utcone = utc.addHour();
              var beats = (utcone.second + utcone.minute * 60 + utcone.hour * 3600) / 86.4;
              return Math.round(beats);
            },
            addHour: function () {
              var tmp$0, tmp$1, tmp$2, tmp$3, tmp$4, tmp$5;
              var newTime = _.com.ppolivka.time.Time_55wt5a$(undefined, this.toMoment(), this.zone);
              if (this.hour === 23) {
                tmp$0 = newTime, tmp$1 = tmp$0.day, tmp$2 = tmp$1, tmp$0.day = tmp$1 + 1, tmp$2;
                newTime.hour = 0;
              }
               else {
                tmp$3 = newTime, tmp$4 = tmp$3.hour, tmp$5 = tmp$4, tmp$3.hour = tmp$4 + 1, tmp$5;
              }
              return newTime;
            },
            removeHour: function () {
              var tmp$0, tmp$1, tmp$2, tmp$3, tmp$4, tmp$5;
              var newTime = _.com.ppolivka.time.Time_55wt5a$(undefined, this.toMoment(), this.zone);
              if (this.hour === 0) {
                tmp$0 = newTime, tmp$1 = tmp$0.day, tmp$2 = tmp$1, tmp$0.day = tmp$1 - 1, tmp$2;
                newTime.hour = 23;
              }
               else {
                tmp$3 = newTime, tmp$4 = tmp$3.hour, tmp$5 = tmp$4, tmp$3.hour = tmp$4 - 1, tmp$5;
              }
              return newTime;
            },
            normalize: function ($receiver) {
              return ('0' + $receiver).substring(('0' + $receiver).length - 2, ('0' + $receiver).length);
            }
          }, /** @lends _.com.ppolivka.time.Time */ {
            object_initializer$: function () {
              return Kotlin.createObject(null, null, {
                timeFromBeats: function (beats, timeZone) {
                  var tmp$0, tmp$1;
                  var seconds = (tmp$1 = (tmp$0 = Kotlin.safeParseDouble(beats)) != null ? tmp$0 / 0.011574 : null) != null ? tmp$1 : Kotlin.throwNPE();
                  var time = _.com.ppolivka.time.Time_cxhy00$(undefined, new Date(), 'UTC');
                  time.hour = Math.floor(seconds / 3600);
                  time.minute = Math.floor((seconds - time.hour * 3600) / 60);
                  time.second = Math.floor(seconds % 60);
                  var utcone = time.removeHour();
                  var timeZoned = utcone.convertZone_61zpoe$(timeZone);
                  return timeZoned;
                }
              });
            }
          }),
          Time_55wt5a$: function ($this, moment, timeZone) {
            $this = $this || Object.create(_.com.ppolivka.time.Time.prototype);
            _.com.ppolivka.time.Time.call($this);
            $this.year = moment.year();
            $this.month = moment.month() + 1;
            $this.day = moment.day();
            $this.hour = moment.hour();
            $this.minute = moment.minute();
            $this.second = moment.second();
            $this.zone = timeZone;
            return $this;
          },
          Time_cxhy00$: function ($this, date, timeZone) {
            $this = $this || Object.create(_.com.ppolivka.time.Time.prototype);
            _.com.ppolivka.time.Time.call($this);
            $this.year = date.getFullYear();
            $this.month = date.getMonth() + 1;
            $this.day = date.getDate();
            $this.hour = date.getHours();
            $this.minute = date.getMinutes();
            $this.second = date.getSeconds();
            $this.zone = timeZone;
            return $this;
          },
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
  _.com.ppolivka.main([]);
}(Kotlin));

//@ sourceMappingURL=InternetTimeConverter.js.map
