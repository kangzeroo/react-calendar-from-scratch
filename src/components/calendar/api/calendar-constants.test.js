import assert from 'assert';
import {
  dayOfTheWeek,
  isLeapYear,
  yearAsDays,
  monthAsDays,
  daysSince1800,
} from './calendar-constants';

// $ npm run test src/components/calendar/api/calendar-constants.test.js
// $ npx flow src/components/calendar/api/calendar-constants.test.js
// $ node -r esm src/components/calendar/api/calendar-constants.test.js


describe('dayOfTheWeek()', function() {
  it('Should show April 4 1804 as 3 (Wednesday)', function() {
    assert.equal(dayOfTheWeek(new Date('April 4 1804')), 3);
  });
  it('Should show January 13 1899 as 5 (Friday)', function() {
    assert.equal(dayOfTheWeek(new Date('January 13 1899')), 5);
  });
  it('Should show Sept 8 1905 as 5 (Friday)', function() {
    assert.equal(dayOfTheWeek(new Date('Sept 8 1905')), 5);
  });
  it('Should show March 8 1995 as 3 (Wednesday)', function() {
    assert.equal(dayOfTheWeek(new Date('March 8 1995')), 3);
  });
  it('Should show December 15 2009 as 2 (Tuesday)', function() {
    assert.equal(dayOfTheWeek(new Date('December 15 2009')), 2);
  });
  it('Should show Feb 26 2019 as 2 (Tuesday)', function() {
    assert.equal(dayOfTheWeek(new Date('Feb 26 2019')), 2);
  });
});

describe('isLeapYear()', function() {
  it('Should detect 1800 as not leap year', function() {
    assert.equal(isLeapYear(1800), false);
  });
  it('Should detect 1804 as leap year', function() {
    assert.equal(isLeapYear(1804), true);
  });
  it('Should detect 1900 as not leap year', function() {
    assert.equal(isLeapYear(1900), false);
  });
  it('Should detect 2000 as leap year', function() {
    assert.equal(isLeapYear(2000), true);
  });
  it('Should detect 2004 as a leap year', function() {
    assert.equal(isLeapYear(2004), true);
  });
  it('Should detect 2019 as not leap year', function() {
    assert.equal(isLeapYear(2019), false);
  });
});

describe('yearAsDays() inclusive of last day', function() {
  it('Should count 0 days from 1800', function() {
    assert.equal(yearAsDays(1800), 0);
  });
  it('Should count 1461 days from 1804', function() {
    assert.equal(yearAsDays(1804), 1460);
  });
  it('Should count 1461 days from 1809', function() {
    assert.equal(yearAsDays(1809), 3287);
  });
  it('Should count 36525 days from 1900', function() {
    assert.equal(yearAsDays(1900), 36524);
  });
  it('Should count 36525 days from 1901', function() {
    assert.equal(yearAsDays(1901), 36889);
  });
  it('Should count 36525 days from 1945', function() {
    assert.equal(yearAsDays(1945), 52960);
  });
  it('Should count 73049 days from 2000', function() {
    assert.equal(yearAsDays(2000), 73048);
  });
  it('Should count 36525 days from 2002', function() {
    assert.equal(yearAsDays(2002), 73779);
  });
  it('Should count 74510 days from 2004', function() {
    assert.equal(yearAsDays(2004), 74509);
  });
  it('Should count 79989 days from 2019', function() {
    assert.equal(yearAsDays(2019), 79988);
  });
});

describe('monthAsDays()', function() {
  it('Should count x days from January', function() {
    assert.equal(monthAsDays(0), 0);
  });
  it('Should count x days from Febuary', function() {
    assert.equal(monthAsDays(1), 31);
  });
  it('Should count x days from March', function() {
    assert.equal(monthAsDays(2), 59);
  });
  it('Should count x days from March, with leap', function() {
    assert.equal(monthAsDays(2, true), 60);
  });
  it('Should count x days from April', function() {
    assert.equal(monthAsDays(3), 90);
  });
  it('Should count x days from May', function() {
    assert.equal(monthAsDays(4), 120);
  });
  it('Should count x days from June', function() {
    assert.equal(monthAsDays(5), 151);
  });
  it('Should count x days from July', function() {
    assert.equal(monthAsDays(6), 181);
  });
  it('Should count x days from August', function() {
    assert.equal(monthAsDays(7), 212);
  });
  it('Should count x days from September', function() {
    assert.equal(monthAsDays(8), 243);
  });
  it('Should count x days from October', function() {
    assert.equal(monthAsDays(9), 273);
  });
  it('Should count x days from November', function() {
    assert.equal(monthAsDays(10), 304);
  });
  it('Should count x days from December', function() {
    assert.equal(monthAsDays(11), 334);
  });
});

describe('daysSince1800()', function() {
  it('Should count 1 days since Jan 1 1800, inclusive', function() {
    assert.equal(daysSince1800(new Date('Jan 1 1800'), true), 1);
  });
  it('Should count 36520 days since Dec 27 1899, inclusive', function() {
    assert.equal(daysSince1800(new Date('Dec 27 1899'), true), 36520);
  });
  it('Should count 34769 days since Mar 8 1995, exclusive', function() {
    assert.equal(daysSince1800(new Date('Mar 8 1995'), false), 71288);
  });
  it('Should count 72875 days since July 12 1999, exclusive', function() {
    assert.equal(daysSince1800(new Date('July 12 1999'), false), 72875);
  });
  it('Should count 73188 days since May 19 2000, inclusive', function() {
    assert.equal(daysSince1800(new Date('May 19 2000'), true), 73188);
  });
  it('Should count 76973 days since Sept 29 2010, inclusive', function() {
    assert.equal(daysSince1800(new Date('Sept 29 2010'), true), 76973);
  });
  it('Should count 80043 days since Feb 25 2019, exclusive', function() {
    assert.equal(daysSince1800(new Date('Feb 25 2019'), false), 80043);
  });
});

//
// describe('daysSince1800', function() {
//   it('_______________', function() {
//     assert.equal(true, true);
//   });
// });
