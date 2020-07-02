/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const opn = require('open');

require('dotenv').config();

const reportMap = {
  unit: {
    dir: 'reports/coverage',
    entry: [
      'index.html',
    ],
  },
  bundle: {
    dir: 'reports',
    entry: [
      'bundle.html',
    ],
  },
  perf: {
    dir: 'reports',
    entry: [
      'lighthouse.html',
    ],
  },
};

const reportType = process.env.REPORT_TYPE;

/**
 * Checks if all required parameters are provided
 * @param {object} config report configuratino
 */
function checkRequiredParams(config) {
  config.required.forEach((param) => {
    if (!config[param]) {
      throw new Error(`You are missing ${param} value.`);
    }
  });
}

if (!reportType || !reportMap[reportType]) {
  throw new Error('You should provide a valid type for a report');
}

if (reportMap[reportType].isRemote) {
  checkRequiredParams(reportMap[reportType]);
  opn(
    `${reportMap[reportType].host}${reportMap[reportType].route}`,
    { wait: false },
  );
} else {
  reportMap[reportType].entry.forEach((file) => {
    opn(`${reportMap[reportType].dir}/${file}`, { wait: false });
  });
}
