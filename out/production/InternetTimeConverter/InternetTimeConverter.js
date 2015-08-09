(function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    com: Kotlin.definePackage(null, /** @lends _.com */ {
      ppolivka: Kotlin.definePackage(function () {
        this.dateTime = _.com.ppolivka.time.Time_sm46dy$(undefined, new Date(), 'UTC');
        this.paneHidden = true;
      }, /** @lends _.com.ppolivka */ {
        main: function (args) {
          _.com.ppolivka.storage.ZoneDao.object.checkAndInitZone();
          _.com.ppolivka.dateTime = _.com.ppolivka.time.Time_sm46dy$(undefined, new Date(), _.com.ppolivka.storage.ZoneDao.object.getZone());
          _.com.ppolivka.ui.Field.object.zones.value_1(_.com.ppolivka.storage.ZoneDao.object.getZone());
          _.com.ppolivka.ui.Field.object.settingsButton.title(_.com.ppolivka.storage.ZoneDao.object.getZone());
          _.com.ppolivka.render();
          _.com.ppolivka.ui.Field.object.beats.keyup(_.com.ppolivka.beatsChange);
          _.com.ppolivka.ui.Field.object.hour.keyup(_.com.ppolivka.timeChange);
          _.com.ppolivka.ui.Field.object.minute.keyup(_.com.ppolivka.timeChange);
          _.com.ppolivka.ui.Field.object.second.keyup(_.com.ppolivka.timeChange);
          _.com.ppolivka.ui.Field.object.settingsButton.click(_.com.ppolivka.showHideInfo);
          _.com.ppolivka.ui.Field.object.zones.change(_.com.ppolivka.zoneChange);
          _.com.ppolivka.ui.Field.object.resetZone.click(_.com.ppolivka.resetZone);
        },
        beatsChange: function (event) {
          var tmp$0;
          var beats = (tmp$0 = _.com.ppolivka.ui.Field.object.beats.value()) != null ? tmp$0 : '0';
          _.com.ppolivka.dateTime = _.com.ppolivka.time.Time.object.timeFromBeats(beats, _.com.ppolivka.storage.ZoneDao.object.getZone());
          _.com.ppolivka.render();
        },
        timeChange: function (event) {
          if (!Kotlin.equals(_.com.ppolivka.ui.Field.object.hour.value(), '') && !Kotlin.equals(_.com.ppolivka.ui.Field.object.minute.value(), '') && !Kotlin.equals(_.com.ppolivka.ui.Field.object.second.value(), '')) {
            _.com.ppolivka.dateTime.hour = _.com.ppolivka.ui.Field.object.hour.intValue();
            _.com.ppolivka.dateTime.minute = _.com.ppolivka.ui.Field.object.minute.intValue();
            _.com.ppolivka.dateTime.second = _.com.ppolivka.ui.Field.object.second.intValue();
            _.com.ppolivka.render();
          }
        },
        zoneChange: function (event) {
          var tmp$0;
          var zone = (tmp$0 = _.com.ppolivka.ui.Field.object.zones.value()) != null ? tmp$0 : 'UTC';
          _.com.ppolivka.storage.ZoneDao.object.saveZone_61zpoe$(zone);
          _.com.ppolivka.ui.Field.object.settingsButton.title(zone);
          _.com.ppolivka.dateTime = _.com.ppolivka.dateTime.convertZone_61zpoe$(zone);
          _.com.ppolivka.render();
        },
        resetZone: function (event) {
          var zone = jstz.determine().name();
          _.com.ppolivka.storage.ZoneDao.object.saveZone_61zpoe$(zone);
          _.com.ppolivka.ui.Field.object.zones.value_1(zone);
          _.com.ppolivka.ui.Field.object.settingsButton.title(zone);
          _.com.ppolivka.dateTime = _.com.ppolivka.dateTime.convertZone_61zpoe$(zone);
          _.com.ppolivka.render();
        },
        showHideInfo: function (event) {
          if (_.com.ppolivka.paneHidden) {
            _.com.ppolivka.ui.Field.object.zonePane.removeClass('hide');
            _.com.ppolivka.ui.Field.object.zonePane.addClass('show');
            _.com.ppolivka.paneHidden = false;
          }
           else {
            _.com.ppolivka.ui.Field.object.zonePane.removeClass('show');
            _.com.ppolivka.ui.Field.object.zonePane.addClass('hide');
            _.com.ppolivka.paneHidden = true;
          }
        },
        render: function () {
          _.com.ppolivka.ui.Field.object.hour.value_1(_.com.ppolivka.dateTime.hour.toString());
          _.com.ppolivka.ui.Field.object.minute.value_1(_.com.ppolivka.dateTime.minute.toString());
          _.com.ppolivka.ui.Field.object.second.value_1(_.com.ppolivka.dateTime.second.toString());
          _.com.ppolivka.ui.Field.object.beats.value_1(_.com.ppolivka.dateTime.toBeats().toString());
        },
        storage: Kotlin.definePackage(null, /** @lends _.com.ppolivka.storage */ {
          ZoneDao: Kotlin.createClass(null, null, null, /** @lends _.com.ppolivka.storage.ZoneDao */ {
            object_initializer$: function () {
              return Kotlin.createObject(null, null, {
                saveZone_61zpoe$: function (zone) {
                  localStorage.zone = zone;
                },
                getZone: function () {
                  var tmp$0;
                  return (tmp$0 = localStorage.zone) != null ? tmp$0 : Kotlin.throwNPE();
                },
                checkAndInitZone: function () {
                  var tmp$0;
                  var zone = (tmp$0 = localStorage.zone) != null ? tmp$0 : jstz.determine().name();
                  this.saveZone_61zpoe$(zone);
                }
              });
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
              return _.com.ppolivka.time.Time_2bgyw$(undefined, converted, timeZone);
            },
            toBeats: function () {
              var utc = this.convertZone_61zpoe$('UTC');
              var utcone = utc.addHour();
              var beats = (utcone.second + utcone.minute * 60 + utcone.hour * 3600) / 86.4;
              return Math.round(beats);
            },
            addHour: function () {
              var tmp$0, tmp$1, tmp$2, tmp$3, tmp$4, tmp$5;
              var newTime = _.com.ppolivka.time.Time_2bgyw$(undefined, this.toMoment(), this.zone);
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
              var newTime = _.com.ppolivka.time.Time_2bgyw$(undefined, this.toMoment(), this.zone);
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
                  var time = _.com.ppolivka.time.Time_sm46dy$(undefined, new Date(), 'UTC');
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
          Time_2bgyw$: function ($this, moment, timeZone) {
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
          Time_sm46dy$: function ($this, date, timeZone) {
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
          }
        }),
        ui: Kotlin.definePackage(null, /** @lends _.com.ppolivka.ui */ {
          Field: Kotlin.createEnumClass(function () {
            return [Kotlin.Enum];
          }, function $fun(e, v) {
            $fun.baseInitializer.call(this);
            this.element = e;
            this.validator = v;
          }, function () {
            return {
              hour: new _.com.ppolivka.ui.Field(document.getElementById('hour'), new _.com.ppolivka.ui.validator.impl.IntValidator(23)),
              minute: new _.com.ppolivka.ui.Field(document.getElementById('minute'), new _.com.ppolivka.ui.validator.impl.IntValidator(59)),
              second: new _.com.ppolivka.ui.Field(document.getElementById('second'), new _.com.ppolivka.ui.validator.impl.IntValidator(59)),
              beats: new _.com.ppolivka.ui.Field(document.getElementById('beats'), new _.com.ppolivka.ui.validator.impl.IntValidator(999)),
              zonePane: new _.com.ppolivka.ui.Field(document.getElementById('zonePane'), new _.com.ppolivka.ui.validator.impl.StringValidator()),
              zones: new _.com.ppolivka.ui.Field(document.getElementById('zones'), new _.com.ppolivka.ui.validator.impl.StringValidator()),
              resetZone: new _.com.ppolivka.ui.Field(document.getElementById('resetZone'), new _.com.ppolivka.ui.validator.impl.StringValidator()),
              settingsButton: new _.com.ppolivka.ui.Field(document.getElementById('showSettings'), new _.com.ppolivka.ui.validator.impl.StringValidator())
            };
          }, /** @lends _.com.ppolivka.ui.Field.prototype */ {
            value: function () {
              var tmp$0;
              return (tmp$0 = this.element) != null ? tmp$0.value : null;
            },
            value_1: function (v) {
              var tmp$0;
              (tmp$0 = this.element) != null ? (tmp$0.value = this.validator.validate_61zpoe$(v)) : null;
            },
            title: function (v) {
              var tmp$0;
              (tmp$0 = this.element) != null ? tmp$0.setAttribute('title', v) : null;
            },
            intValue: function () {
              var tmp$0;
              return parseInt((tmp$0 = this.value()) != null ? tmp$0 : '0');
            },
            addClass: function (clazz) {
              var tmp$0, tmp$1;
              (tmp$1 = (tmp$0 = this.element) != null ? tmp$0.classList : null) != null ? tmp$1.add(clazz) : null;
            },
            removeClass: function (clazz) {
              var tmp$0, tmp$1;
              (tmp$1 = (tmp$0 = this.element) != null ? tmp$0.classList : null) != null ? tmp$1.remove(clazz) : null;
            },
            keyup: function (callback) {
              var tmp$0;
              (tmp$0 = this.element) != null ? tmp$0.addEventListener('keyup', callback) : null;
            },
            change: function (callback) {
              var tmp$0;
              (tmp$0 = this.element) != null ? tmp$0.addEventListener('change', callback) : null;
            },
            click: function (callback) {
              var tmp$0;
              (tmp$0 = this.element) != null ? tmp$0.addEventListener('click', callback) : null;
            }
          }),
          validator: Kotlin.definePackage(null, /** @lends _.com.ppolivka.ui.validator */ {
            Validator: Kotlin.createTrait(null),
            impl: Kotlin.definePackage(null, /** @lends _.com.ppolivka.ui.validator.impl */ {
              IntValidator: Kotlin.createClass(function () {
                return [_.com.ppolivka.ui.validator.Validator];
              }, function (top) {
                this.top = top;
              }, /** @lends _.com.ppolivka.ui.validator.impl.IntValidator.prototype */ {
                validate_61zpoe$: function (value) {
                  var int = parseInt(value != null ? value : '0');
                  if (int > this.top) {
                    int = this.top;
                  }
                  if (int < 0) {
                    int = 0;
                  }
                  return int.toString();
                }
              }),
              StringValidator: Kotlin.createClass(function () {
                return [_.com.ppolivka.ui.validator.Validator];
              }, null, /** @lends _.com.ppolivka.ui.validator.impl.StringValidator.prototype */ {
                validate_61zpoe$: function (value) {
                  return value != null ? value : '';
                }
              })
            })
          })
        })
      })
    })
  });
  Kotlin.defineModule('InternetTimeConverter', _);
  _.com.ppolivka.main([]);
}(Kotlin));

//@ sourceMappingURL=InternetTimeConverter.js.map
