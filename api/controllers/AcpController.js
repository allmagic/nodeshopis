/**
 * AcpController
 *
 * @description :: Server-side logic for managing acps
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: (req,res) => {
	  res.view('acp/index')
  }
};

