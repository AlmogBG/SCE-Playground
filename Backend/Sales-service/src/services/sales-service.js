// src/services/sales-service.js
const salesDataAccess = require('../data-access/salesDataAccess');

// Handle creation logic
exports.createSale = async (data) => {
  console.log("been here 2");
  return await salesDataAccess.insertSale(data);
};

// Fetch all sales
exports.getAllSales = async () => {
  return await salesDataAccess.getAllSales();
};

// Fetch a specific sale by ID
exports.getSaleById = async (id) => {
  return await salesDataAccess.getSaleById(id);
};

// Handle update logic
exports.updateSale = async (id, data) => {
  return await salesDataAccess.updateSale(id, data);
};

// Handle deletion logic
exports.deleteSale = async (id) => {
  await salesDataAccess.deleteSale(id);
};

exports.getSalesByCustomerId = async (id) => {
  return await salesDataAccess.getSalesByCustomerId(id);
};

exports.isSalesRep = async (email) => {
  return await salesDataAccess.checkIfSalesRep(email);
};

exports.getSalesRepType = async (email) => {
  return await salesDataAccess.getSalesRepType(email);
};

exports.getConversationsByCustomerId = async (id) => {
  return await salesDataAccess.getConversationsByCustomerId(id);
};

exports.getAllConversations = async () => {
  return await salesDataAccess.getAllConversations();
};

exports.getMyLeads = async (email) => {
  return await salesDataAccess.getMyLeads(email);
};

exports.getAllLeads = async () => {
  return await salesDataAccess.getAllLeads();
};

exports.assignLead = async (leadId, email) => {
  return await salesDataAccess.assignLead(leadId, email);
};

exports.updateLeadToInProgress = async (number) => {
  return await salesDataAccess.updateLeadToInProgress(number);
};

exports.updateLeadStatus = async (leadId, status) => {
  return await salesDataAccess.updateLeadStatus(leadId, status);
};

exports.unassignLead = async (leadId) => {
  return await salesDataAccess.unassignLead(leadId);
};

exports.doneRevenue = async(leadId) => {
  console.log("been here 2")
  return await salesDataAccess.doneRevenue(leadId);
};

exports.unDoneRevenue = async() => {
  return await salesDataAccess.unDoneRevenue();
};

exports.isOwner = async (email) => {
  return await salesDataAccess.isOwner(email);
};


exports.reportByRep = async(email) => {
  return await salesDataAccess.reportByRep(email);
};

exports.totalSalesByRep = async(email) => {
  return await salesDataAccess.totalSalesByRep(email);
};

exports.getAllRepresentatives = async () => {
  return await salesDataAccess.getAllRepresentatives();
};

exports.getAllSalesPrice = async () => {
  return await salesDataAccess.getAllSalesPrice();
};

exports.getAllSalesPriceByTime = async () => {
  return await salesDataAccess.getAllSalesPriceByTime();
};


exports.reportByRepMonthly = async(email) => {
  return await salesDataAccess.reportByRepMonthly(email);
};

exports.reportByRepYearly = async(email) => {
  return await salesDataAccess.reportByRepYearly(email);
};