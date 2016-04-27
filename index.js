/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-04-27
 * @author Liang <liang@maichong.it>
 */

'use strict';

exports.default = class SmsTestDriver {
  constructor(service) {
    this.service = service;
  }

  /**
   * [async] 发送
   * @param to
   * @param message
   * @returns {Promise.<T>}
   */
  send(to, message) {
    console.log('send sms to', to, ':', message);
    return Promise.resolve();
  }
};
