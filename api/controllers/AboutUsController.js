/**
 * AboutUsController
 *
 * @description :: Server-side logic for managing aboutuses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: (req, res) => {
    let sampleDate = (new Date()).toString();
    //
    let data = {
      currentDate: sampleDate,
      nhanVien: 'Khanh Admin',
      testVariable: 'this is test value'
    };

    return res.view('aboutUs', data)
  }
};

