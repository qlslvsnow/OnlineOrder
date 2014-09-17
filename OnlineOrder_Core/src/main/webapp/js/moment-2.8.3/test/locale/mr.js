var moment = require('../../moment');


    /**************************************************
      Marathi
     *************************************************/

exports['locale:mr'] = {
    setUp : function (cb) {
        moment.locale('mr');
        moment.createFromInputFallback = function () {
            throw new Error('input not handled by moment');
        };
        cb();
    },

    tearDown : function (cb) {
        moment.locale('en');
        cb();
    },

    'parse' : function (test) {
        var tests = 'जानेवारी जाने._फेब्रुवारी फेब्रु._मार्च मार्च._एप्रिल एप्रि._मे मे._जून जून._जुलै जुलै._ऑगस्ट ऑग._सप्टेंबर सप्टें._ऑक्टोबर ऑक्टो._नोव्हेंबर नोव्हें._डिसेंबर डिसें.'.split('_'), i;
        function equalTest(input, mmm, i) {
            test.equal(moment(input, mmm).month(), i, input + ' should be month ' + (i + 1));
        }
        for (i = 0; i < 12; i++) {
            tests[i] = tests[i].split(' ');
            equalTest(tests[i][0], 'MMM', i);
            equalTest(tests[i][1], 'MMM', i);
            equalTest(tests[i][0], 'MMMM', i);
            equalTest(tests[i][1], 'MMMM', i);
            equalTest(tests[i][0].toLocaleLowerCase(), 'MMMM', i);
            equalTest(tests[i][1].toLocaleLowerCase(), 'MMMM', i);
            equalTest(tests[i][0].toLocaleUpperCase(), 'MMMM', i);
            equalTest(tests[i][1].toLocaleUpperCase(), 'MMMM', i);
        }
        test.done();
    },

    'format' : function (test) {
        var a = [
                ['dddd, Do MMMM YYYY, a h:mm:ss वाजता', 'रविवार, १४ फेब्रुवारी २०१०, दुपारी ३:२५:५० वाजता'],
                ['ddd, a h वाजता',                       'रवि, दुपारी ३ वाजता'],
                ['M Mo MM MMMM MMM',                   '२ २ ०२ फेब्रुवारी फेब्रु.'],
                ['YYYY YY',                            '२०१० १०'],
                ['D Do DD',                            '१४ १४ १४'],
                ['d do dddd ddd dd',                   '० ० रविवार रवि र'],
                ['DDD DDDo DDDD',                      '४५ ४५ ०४५'],
                ['w wo ww',                            '८ ८ ०८'],
                ['h hh',                               '३ ०३'],
                ['H HH',                               '१५ १५'],
                ['m mm',                               '२५ २५'],
                ['s ss',                               '५० ५०'],
                ['a A',                                'दुपारी दुपारी'],
                ['L',                                  '१४/०२/२०१०'],
                ['LL',                                 '१४ फेब्रुवारी २०१०'],
                ['LLL',                                '१४ फेब्रुवारी २०१०, दुपारी ३:२५ वाजता'],
                ['LLLL',                               'रविवार, १४ फेब्रुवारी २०१०, दुपारी ३:२५ वाजता'],
                ['l',                                  '१४/२/२०१०'],
                ['ll',                                 '१४ फेब्रु. २०१०'],
                ['lll',                                '१४ फेब्रु. २०१०, दुपारी ३:२५ वाजता'],
                ['llll',                               'रवि, १४ फेब्रु. २०१०, दुपारी ३:२५ वाजता']
            ],
            b = moment(new Date(2010, 1, 14, 15, 25, 50, 125)),
            i;
        for (i = 0; i < a.length; i++) {
            test.equal(b.format(a[i][0]), a[i][1], a[i][0] + ' ---> ' + a[i][1]);
        }
        test.done();
    },

    'format ordinal' : function (test) {
        test.equal(moment([2011, 0, 1]).format('DDDo'), '१', '१');
        test.equal(moment([2011, 0, 2]).format('DDDo'), '२', '२');
        test.equal(moment([2011, 0, 3]).format('DDDo'), '३', '३');
        test.equal(moment([2011, 0, 4]).format('DDDo'), '४', '४');
        test.equal(moment([2011, 0, 5]).format('DDDo'), '५', '५');
        test.equal(moment([2011, 0, 6]).format('DDDo'), '६', '६');
        test.equal(moment([2011, 0, 7]).format('DDDo'), '७', '७');
        test.equal(moment([2011, 0, 8]).format('DDDo'), '८', '८');
        test.equal(moment([2011, 0, 9]).format('DDDo'), '९', '९');
        test.equal(moment([2011, 0, 10]).format('DDDo'), '१०', '१०');

        test.equal(moment([2011, 0, 11]).format('DDDo'), '११', '११');
        test.equal(moment([2011, 0, 12]).format('DDDo'), '१२', '१२');
        test.equal(moment([2011, 0, 13]).format('DDDo'), '१३', '१३');
        test.equal(moment([2011, 0, 14]).format('DDDo'), '१४', '१४');
        test.equal(moment([2011, 0, 15]).format('DDDo'), '१५', '१५');
        test.equal(moment([2011, 0, 16]).format('DDDo'), '१६', '१६');
        test.equal(moment([2011, 0, 17]).format('DDDo'), '१७', '१७');
        test.equal(moment([2011, 0, 18]).format('DDDo'), '१८', '१८');
        test.equal(moment([2011, 0, 19]).format('DDDo'), '१९', '१९');
        test.equal(moment([2011, 0, 20]).format('DDDo'), '२०', '२०');

        test.equal(moment([2011, 0, 21]).format('DDDo'), '२१', '२१');
        test.equal(moment([2011, 0, 22]).format('DDDo'), '२२', '२२');
        test.equal(moment([2011, 0, 23]).format('DDDo'), '२३', '२३');
        test.equal(moment([2011, 0, 24]).format('DDDo'), '२४', '२४');
        test.equal(moment([2011, 0, 25]).format('DDDo'), '२५', '२५');
        test.equal(moment([2011, 0, 26]).format('DDDo'), '२६', '२६');
        test.equal(moment([2011, 0, 27]).format('DDDo'), '२७', '२७');
        test.equal(moment([2011, 0, 28]).format('DDDo'), '२८', '२८');
        test.equal(moment([2011, 0, 29]).format('DDDo'), '२९', '२९');
        test.equal(moment([2011, 0, 30]).format('DDDo'), '३०', '३०');

        test.equal(moment([2011, 0, 31]).format('DDDo'), '३१', '३१');
        test.done();
    },

    'format month' : function (test) {
        var expected = 'जानेवारी जाने._फेब्रुवारी फेब्रु._मार्च मार्च._एप्रिल एप्रि._मे मे._जून जून._जुलै जुलै._ऑगस्ट ऑग._सप्टेंबर सप्टें._ऑक्टोबर ऑक्टो._नोव्हेंबर नोव्हें._डिसेंबर डिसें.'.split('_'), i;
        for (i = 0; i < expected.length; i++) {
            test.equal(moment([2011, i, 1]).format('MMMM MMM'), expected[i], expected[i]);
        }
        test.done();
    },

    'format week' : function (test) {
        var expected = 'रविवार रवि र_सोमवार सोम सो_मंगळवार मंगळ मं_बुधवार बुध बु_गुरूवार गुरू गु_शुक्रवार शुक्र शु_शनिवार शनि श'.split('_'), i;
        for (i = 0; i < expected.length; i++) {
            test.equal(moment([2011, 0, 2 + i]).format('dddd ddd dd'), expected[i], expected[i]);
        }
        test.done();
    },

    'from' : function (test) {
        var start = moment([2007, 1, 28]);
        test.equal(start.from(moment([2007, 1, 28]).add({s: 44}), true),  'सेकंद', '44 seconds = a few seconds');
        test.equal(start.from(moment([2007, 1, 28]).add({s: 45}), true),  'एक मिनिट',      '45 seconds = a minute');
        test.equal(start.from(moment([2007, 1, 28]).add({s: 89}), true),  'एक मिनिट',      '89 seconds = a minute');
        test.equal(start.from(moment([2007, 1, 28]).add({s: 90}), true),  '२ मिनिटे',     '90 seconds = 2 minutes');
        test.equal(start.from(moment([2007, 1, 28]).add({m: 44}), true), '४४ मिनिटे', '44 minutes = 44 minutes');
        test.equal(start.from(moment([2007, 1, 28]).add({m: 45}), true),  'एक तास',       '45 minutes = an hour');
        test.equal(start.from(moment([2007, 1, 28]).add({m: 89}), true),  'एक तास',       '89 minutes = an hour');
        test.equal(start.from(moment([2007, 1, 28]).add({m: 90}), true),  '२ तास',       '90 minutes = 2 hours');
        test.equal(start.from(moment([2007, 1, 28]).add({h: 5}), true),   '५ तास',       '5 hours = 5 hours');
        test.equal(start.from(moment([2007, 1, 28]).add({h: 21}), true),  '२१ तास',      '21 hours = 21 hours');
        test.equal(start.from(moment([2007, 1, 28]).add({h: 22}), true),  'एक दिवस',         '22 hours = a day');
        test.equal(start.from(moment([2007, 1, 28]).add({h: 35}), true),  'एक दिवस',         '35 hours = a day');
        test.equal(start.from(moment([2007, 1, 28]).add({h: 36}), true),  '२ दिवस',        '36 hours = 2 days');
        test.equal(start.from(moment([2007, 1, 28]).add({d: 1}), true),   'एक दिवस',         '1 day = a day');
        test.equal(start.from(moment([2007, 1, 28]).add({d: 5}), true),   '५ दिवस',        '5 days = 5 days');
        test.equal(start.from(moment([2007, 1, 28]).add({d: 25}), true),  '२५ दिवस',       '25 days = 25 days');
        test.equal(start.from(moment([2007, 1, 28]).add({d: 26}), true), 'एक महिना', '26 days = a month');
        test.equal(start.from(moment([2007, 1, 28]).add({d: 30}), true), 'एक महिना', '30 days = a month');
        test.equal(start.from(moment([2007, 1, 28]).add({d: 43}), true), 'एक महिना', '43 days = a month');
        test.equal(start.from(moment([2007, 1, 28]).add({d: 46}), true), '२ महिने', '46 days = 2 months');
        test.equal(start.from(moment([2007, 1, 28]).add({d: 74}), true), '२ महिने', '75 days = 2 months');
        test.equal(start.from(moment([2007, 1, 28]).add({d: 76}), true), '३ महिने', '76 days = 3 months');
        test.equal(start.from(moment([2007, 1, 28]).add({M: 1}), true), 'एक महिना', '1 month = a month');
        test.equal(start.from(moment([2007, 1, 28]).add({M: 5}), true), '५ महिने', '5 months = 5 months');
        test.equal(start.from(moment([2007, 1, 28]).add({d: 345}), true), 'एक वर्ष',        '345 days = a year');
        test.equal(start.from(moment([2007, 1, 28]).add({d: 548}), true), '२ वर्षे',       '548 days = 2 years');
        test.equal(start.from(moment([2007, 1, 28]).add({y: 1}), true),   'एक वर्ष',        '1 year = a year');
        test.equal(start.from(moment([2007, 1, 28]).add({y: 5}), true), '५ वर्षे', '5 years = 5 years');
        test.done();
    },

    'suffix' : function (test) {
        test.equal(moment(30000).from(0), 'सेकंद नंतर', 'prefix');
        test.equal(moment(0).from(30000), 'सेकंद पूर्वी', 'suffix');
        test.done();
    },

    'now from now' : function (test) {
        test.equal(moment().fromNow(), 'सेकंद पूर्वी',  'now from now should display as in the past');
        test.done();
    },

    'fromNow' : function (test) {
        test.equal(moment().add({s: 30}).fromNow(), 'सेकंद नंतर', 'सेकंद नंतर');
        test.equal(moment().add({d: 5}).fromNow(), '५ दिवस नंतर', '५ दिवस नंतर');
        test.done();
    },

    'calendar day' : function (test) {
        var a = moment().hours(2).minutes(0).seconds(0);

        test.equal(moment(a).calendar(),                     'आज रात्री २:०० वाजता',     'today at the same time');
        test.equal(moment(a).add({m: 25}).calendar(),      'आज रात्री २:२५ वाजता',     'Now plus 25 min');
        test.equal(moment(a).add({h: 3}).calendar(),       'आज सकाळी ५:०० वाजता',     'Now plus 3 hour');
        test.equal(moment(a).add({d: 1}).calendar(),       'उद्या रात्री २:०० वाजता',  'tomorrow at the same time');
        test.equal(moment(a).subtract({h: 1}).calendar(),  'आज रात्री १:०० वाजता',     'Now minus 1 hour');
        test.equal(moment(a).subtract({d: 1}).calendar(),  'काल रात्री २:०० वाजता', 'yesterday at the same time');
        test.done();
    },

    'calendar next week' : function (test) {
        var i, m;
        for (i = 2; i < 7; i++) {
            m = moment().add({d: i});
            test.equal(m.calendar(),       m.format('dddd[,] LT'),  'Today + ' + i + ' days current time');
            m.hours(0).minutes(0).seconds(0).milliseconds(0);
            test.equal(m.calendar(),       m.format('dddd[,] LT'),  'Today + ' + i + ' days beginning of day');
            m.hours(23).minutes(59).seconds(59).milliseconds(999);
            test.equal(m.calendar(),       m.format('dddd[,] LT'),  'Today + ' + i + ' days end of day');
        }
        test.done();
    },

    'calendar last week' : function (test) {
        var i, m;

        for (i = 2; i < 7; i++) {
            m = moment().subtract({d: i});
            test.equal(m.calendar(), m.format('[मागील] dddd[,] LT'), 'Today - ' + i + ' days current time');
            m.hours(0).minutes(0).seconds(0).milliseconds(0);
            test.equal(m.calendar(), m.format('[मागील] dddd[,] LT'), 'Today - ' + i + ' days beginning of day');
            m.hours(23).minutes(59).seconds(59).milliseconds(999);
            test.equal(m.calendar(), m.format('[मागील] dddd[,] LT'), 'Today - ' + i + ' days end of day');
        }
        test.done();
    },

    'calendar all else' : function (test) {
        var weeksAgo = moment().subtract({w: 1}),
            weeksFromNow = moment().add({w: 1});

        test.equal(weeksAgo.calendar(),       weeksAgo.format('L'),  '1 week ago');
        test.equal(weeksFromNow.calendar(),   weeksFromNow.format('L'),  'in 1 week');

        weeksAgo = moment().subtract({w: 2});
        weeksFromNow = moment().add({w: 2});

        test.equal(weeksAgo.calendar(),       weeksAgo.format('L'),  '2 weeks ago');
        test.equal(weeksFromNow.calendar(),   weeksFromNow.format('L'),  'in 2 weeks');

        test.done();
    },

    'meridiem' : function (test) {
        test.equal(moment([2011, 2, 23,  2, 30]).format('a'), 'रात्री', 'before dawn');
        test.equal(moment([2011, 2, 23,  9, 30]).format('a'), 'सकाळी', 'morning');
        test.equal(moment([2011, 2, 23, 14, 30]).format('a'), 'दुपारी', 'during day');
        test.equal(moment([2011, 2, 23, 17, 30]).format('a'), 'सायंकाळी', 'evening');
        test.equal(moment([2011, 2, 23, 19, 30]).format('a'), 'सायंकाळी', 'late evening');
        test.equal(moment([2011, 2, 23, 21, 20]).format('a'), 'रात्री', 'night');

        test.equal(moment([2011, 2, 23,  2, 30]).format('A'), 'रात्री', 'before dawn');
        test.equal(moment([2011, 2, 23,  9, 30]).format('A'), 'सकाळी', 'morning');
        test.equal(moment([2011, 2, 23, 14, 30]).format('A'), 'दुपारी', ' during day');
        test.equal(moment([2011, 2, 23, 17, 30]).format('A'), 'सायंकाळी', 'evening');
        test.equal(moment([2011, 2, 23, 19, 30]).format('A'), 'सायंकाळी', 'late evening');
        test.equal(moment([2011, 2, 23, 21, 20]).format('A'), 'रात्री', 'night');

        test.done();
    },

    // Monday is the first day of the week.
    // The week that contains Jan 1st is the first week of the year.

    'weeks year starting sunday' : function (test) {
        test.equal(moment([2012, 0,  1]).week(), 1, 'Jan  1 2012 should be week 1');
        test.equal(moment([2012, 0,  7]).week(), 1, 'Jan  7 2012 should be week 1');
        test.equal(moment([2012, 0,  8]).week(), 2, 'Jan  8 2012 should be week 2');
        test.equal(moment([2012, 0, 14]).week(), 2, 'Jan 14 2012 should be week 2');
        test.equal(moment([2012, 0, 15]).week(), 3, 'Jan 15 2012 should be week 3');

        test.done();
    },

    'weeks year starting monday' : function (test) {
        test.equal(moment([2006, 11, 31]).week(), 1, 'Dec 31 2006 should be week 1');
        test.equal(moment([2007,  0,  1]).week(), 1, 'Jan  1 2007 should be week 1');
        test.equal(moment([2007,  0,  6]).week(), 1, 'Jan  6 2007 should be week 1');
        test.equal(moment([2007,  0,  7]).week(), 2, 'Jan  7 2007 should be week 2');
        test.equal(moment([2007,  0, 13]).week(), 2, 'Jan 13 2007 should be week 2');
        test.equal(moment([2007,  0, 14]).week(), 3, 'Jan 14 2007 should be week 3');

        test.done();
    },

    'weeks year starting tuesday' : function (test) {
        test.equal(moment([2007, 11, 29]).week(), 52, 'Dec 29 2007 should be week 52');
        test.equal(moment([2008,  0,  1]).week(), 1, 'Jan  1 2008 should be week 1');
        test.equal(moment([2008,  0,  5]).week(), 1, 'Jan  5 2008 should be week 1');
        test.equal(moment([2008,  0,  6]).week(), 2, 'Jan  6 2008 should be week 2');
        test.equal(moment([2008,  0, 12]).week(), 2, 'Jan 12 2008 should be week 2');
        test.equal(moment([2008,  0, 13]).week(), 3, 'Jan 13 2008 should be week 3');

        test.done();
    },

    'weeks year starting wednesday' : function (test) {
        test.equal(moment([2002, 11, 29]).week(), 1, 'Dec 29 2002 should be week 1');
        test.equal(moment([2003,  0,  1]).week(), 1, 'Jan  1 2003 should be week 1');
        test.equal(moment([2003,  0,  4]).week(), 1, 'Jan  4 2003 should be week 1');
        test.equal(moment([2003,  0,  5]).week(), 2, 'Jan  5 2003 should be week 2');
        test.equal(moment([2003,  0, 11]).week(), 2, 'Jan 11 2003 should be week 2');
        test.equal(moment([2003,  0, 12]).week(), 3, 'Jan 12 2003 should be week 3');

        test.done();
    },

    'weeks year starting thursday' : function (test) {
        test.equal(moment([2008, 11, 28]).week(), 1, 'Dec 28 2008 should be week 1');
        test.equal(moment([2009,  0,  1]).week(), 1, 'Jan  1 2009 should be week 1');
        test.equal(moment([2009,  0,  3]).week(), 1, 'Jan  3 2009 should be week 1');
        test.equal(moment([2009,  0,  4]).week(), 2, 'Jan  4 2009 should be week 2');
        test.equal(moment([2009,  0, 10]).week(), 2, 'Jan 10 2009 should be week 2');
        test.equal(moment([2009,  0, 11]).week(), 3, 'Jan 11 2009 should be week 3');

        test.done();
    },

    'weeks year starting friday' : function (test) {
        test.equal(moment([2009, 11, 27]).week(), 1, 'Dec 27 2009 should be week 1');
        test.equal(moment([2010,  0,  1]).week(), 1, 'Jan  1 2010 should be week 1');
        test.equal(moment([2010,  0,  2]).week(), 1, 'Jan  2 2010 should be week 1');
        test.equal(moment([2010,  0,  3]).week(), 2, 'Jan  3 2010 should be week 2');
        test.equal(moment([2010,  0,  9]).week(), 2, 'Jan  9 2010 should be week 2');
        test.equal(moment([2010,  0, 10]).week(), 3, 'Jan 10 2010 should be week 3');

        test.done();
    },

    'weeks year starting saturday' : function (test) {
        test.equal(moment([2010, 11, 26]).week(), 1, 'Dec 26 2010 should be week 1');
        test.equal(moment([2011,  0,  1]).week(), 1, 'Jan  1 2011 should be week 1');
        test.equal(moment([2011,  0,  2]).week(), 2, 'Jan  2 2011 should be week 2');
        test.equal(moment([2011,  0,  8]).week(), 2, 'Jan  8 2011 should be week 2');
        test.equal(moment([2011,  0,  9]).week(), 3, 'Jan  9 2011 should be week 3');

        test.done();
    },

    'weeks year starting sunday formatted' : function (test) {
        test.equal(moment([2012, 0,  1]).format('w ww wo'), '१ ०१ १', 'Jan  1 2012 should be week 1');
        test.equal(moment([2012, 0,  7]).format('w ww wo'), '१ ०१ १', 'Jan  7 2012 should be week 1');
        test.equal(moment([2012, 0,  8]).format('w ww wo'), '२ ०२ २', 'Jan  8 2012 should be week 2');
        test.equal(moment([2012, 0, 14]).format('w ww wo'), '२ ०२ २', 'Jan 14 2012 should be week 2');
        test.equal(moment([2012, 0, 15]).format('w ww wo'), '३ ०३ ३', 'Jan 15 2012 should be week 3');

        test.done();
    }
};
