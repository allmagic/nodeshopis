/**
 * AcpController
 *
 * @description :: Server-side logic for managing acps
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: (req,res) => {
	  res.view('acp/index')
  },

  order: (req,res) => {
    res.view('acp/order')
  },

  product: (req,res) => {
    res.view('acp/product')
  },

  seller: (req,res) => {
    res.view('acp/seller')
  },

  transactions: (req,res) => {
    res.view('acp/transactions')
  },

  member: (req,res) => {
    res.view('acp/member')
  },

  system: (req,res) => {
    res.view('acp/system')
  },

  report: (req,res) => {
    res.view('acp/report')
  },
};

