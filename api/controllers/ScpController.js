/**
 * ScpController
 *
 * @description :: Server-side logic for managing scps
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: (req,res) => {
	  return res.view('scp/index')
  },
  product: (req,res) => {
    let params = req.allParams();
    if (params.a == 'add') {
      return res.view('scp/add-product')
    } else {
      return res.view('scp/product')
    }
  }
};

