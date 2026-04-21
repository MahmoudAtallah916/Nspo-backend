// controllers/uploadController.js
import Company from '../models/Company.js';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// @desc    Upload products PDF for a company
// @route   POST /api/upload/company/:companyId/products-pdf
// @access  Private/Admin
export const uploadProductsPDF = async (req, res) => {
  try {
    const { companyId } = req.params;
    
    if (!req.file) {
      return res.status(400).json({ 
        success: false,
        message: 'No PDF file uploaded' 
      });
    }

    const company = await Company.findOne({ _id:companyId });
    
    if (!company) {
      // حذف الملف المرفوع إذا الشركة مش موجودة
      fs.unlinkSync(req.file.path);
      return res.status(404).json({ 
        success: false,
        message: 'Company not found' 
      });
    }

    const baseUrl = `${req.protocol}://${req.get('host')}`;
    const fileUrl = `${baseUrl}/uploads/pdfs/${req.file.filename}`;

    // حذف الملف القديم إذا موجود
    if (company.products_pdf && company.products_pdf.url) {
      const oldFilePath = path.join(__dirname, '../../uploads/pdfs/', path.basename(company.products_pdf.url));
      if (fs.existsSync(oldFilePath)) {
        fs.unlinkSync(oldFilePath);
      }
    }

    company.products_pdf = {
      url: fileUrl,
      filename: req.file.originalname,
      fileSize: req.file.size,
      uploadedAt: new Date()
    };

    await company.save();

    res.status(200).json({
      success: true,
      message: 'Products PDF uploaded successfully',
      data: {
        companyId: company.id,
        companyName: company.name_en,
        pdf: company.products_pdf
      }
    });

  } catch (error) {
    console.error('Error in uploadProductsPDF:', error);
    
    if (req.file) {
      try {
        fs.unlinkSync(req.file.path);
      } catch (unlinkError) {
        console.error('Error deleting file:', unlinkError);
      }
    }
    
    res.status(500).json({ 
      success: false,
      message: 'Server error', 
      error: error.message 
    });
  }
};

// @desc    Upload opportunities PDF for a company
// @route   POST /api/upload/company/:companyId/opportunities-pdf
// @access  Private/Admin
export const uploadOpportunitiesPDF = async (req, res) => {
  try {
    const { companyId } = req.params;
    
    if (!req.file) {
      return res.status(400).json({ 
        success: false,
        message: 'No PDF file uploaded' 
      });
    }

    const company = await Company.findOne({ id: parseInt(companyId) });
    
    if (!company) {
      fs.unlinkSync(req.file.path);
      return res.status(404).json({ 
        success: false,
        message: 'Company not found' 
      });
    }

    const baseUrl = `${req.protocol}://${req.get('host')}`;
    const fileUrl = `${baseUrl}/uploads/pdfs/${req.file.filename}`;

    if (company.opportunities_pdf && company.opportunities_pdf.url) {
      const oldFilePath = path.join(__dirname, '../../uploads/pdfs/', path.basename(company.opportunities_pdf.url));
      if (fs.existsSync(oldFilePath)) {
        fs.unlinkSync(oldFilePath);
      }
    }

    company.opportunities_pdf = {
      url: fileUrl,
      filename: req.file.originalname,
      fileSize: req.file.size,
      uploadedAt: new Date()
    };

    await company.save();

    res.status(200).json({
      success: true,
      message: 'Opportunities PDF uploaded successfully',
      data: {
        companyId: company.id,
        companyName: company.name_en,
        pdf: company.opportunities_pdf
      }
    });

  } catch (error) {
    console.error('Error in uploadOpportunitiesPDF:', error);
    
    if (req.file) {
      fs.unlinkSync(req.file.path);
    }
    
    res.status(500).json({ 
      success: false,
      message: 'Server error', 
      error: error.message 
    });
  }
};

// @desc    Upload PDF with type specified in body
// @route   POST /api/upload/company/:companyId/pdf
// @access  Private/Admin
export const uploadCompanyPDF = async (req, res) => {
  try {
    const { companyId } = req.params;
    const { pdfType } = req.body;
    
    if (!pdfType || !['products', 'opportunities'].includes(pdfType)) {
      if (req.file) {
        fs.unlinkSync(req.file.path);
      }
      return res.status(400).json({ 
        success: false,
        message: 'pdfType is required and must be either "products" or "opportunities"' 
      });
    }
    
    if (!req.file) {
      return res.status(400).json({ 
        success: false,
        message: 'No PDF file uploaded' 
      });
    }

    const company = await Company.findOne({ id: parseInt(companyId) });
    
    if (!company) {
      fs.unlinkSync(req.file.path);
      return res.status(404).json({ 
        success: false,
        message: 'Company not found' 
      });
    }

    const baseUrl = `${req.protocol}://${req.get('host')}`;
    const fileUrl = `${baseUrl}/uploads/pdfs/${req.file.filename}`;

    const pdfField = pdfType === 'products' ? 'products_pdf' : 'opportunities_pdf';
    
    if (company[pdfField] && company[pdfField].url) {
      const oldFilePath = path.join(__dirname, '../../uploads/pdfs/', path.basename(company[pdfField].url));
      if (fs.existsSync(oldFilePath)) {
        fs.unlinkSync(oldFilePath);
      }
    }

    company[pdfField] = {
      url: fileUrl,
      filename: req.file.originalname,
      fileSize: req.file.size,
      uploadedAt: new Date()
    };

    await company.save();

    res.status(200).json({
      success: true,
      message: `${pdfType} PDF uploaded successfully`,
      data: {
        companyId: company.id,
        companyName: company.name_en,
        pdfType,
        pdf: company[pdfField]
      }
    });

  } catch (error) {
    console.error('Error in uploadCompanyPDF:', error);
    
    if (req.file) {
      fs.unlinkSync(req.file.path);
    }
    
    res.status(500).json({ 
      success: false,
      message: 'Server error', 
      error: error.message 
    });
  }
};

// @desc    Get products PDF info for a company
// @route   GET /api/upload/company/:companyId/products-pdf
// @access  Public
export const getProductsPDF = async (req, res) => {
  try {
    const { companyId } = req.params;
    
    const company = await Company.findOne({ id: parseInt(companyId) });
    
    if (!company) {
      return res.status(404).json({ 
        success: false,
        message: 'Company not found' 
      });
    }

    if (!company.products_pdf) {
      return res.status(404).json({ 
        success: false,
        message: 'No products PDF found for this company' 
      });
    }

    res.status(200).json({
      success: true,
      data: company.products_pdf
    });

  } catch (error) {
    console.error('Error in getProductsPDF:', error);
    res.status(500).json({ 
      success: false,
      message: 'Server error', 
      error: error.message 
    });
  }
};

// @desc    Get opportunities PDF info for a company
// @route   GET /api/upload/company/:companyId/opportunities-pdf
// @access  Public
export const getOpportunitiesPDF = async (req, res) => {
  try {
    const { companyId } = req.params;
    
    const company = await Company.findOne({ id: parseInt(companyId) });
    
    if (!company) {
      return res.status(404).json({ 
        success: false,
        message: 'Company not found' 
      });
    }

    if (!company.opportunities_pdf) {
      return res.status(404).json({ 
        success: false,
        message: 'No opportunities PDF found for this company' 
      });
    }

    res.status(200).json({
      success: true,
      data: company.opportunities_pdf
    });

  } catch (error) {
    console.error('Error in getOpportunitiesPDF:', error);
    res.status(500).json({ 
      success: false,
      message: 'Server error', 
      error: error.message 
    });
  }
};

// @desc    Delete products PDF for a company
// @route   DELETE /api/upload/company/:companyId/products-pdf
// @access  Private/Admin
export const deleteProductsPDF = async (req, res) => {
  try {
    const { companyId } = req.params;
    
    const company = await Company.findOne({ id: parseInt(companyId) });
    
    if (!company) {
      return res.status(404).json({ 
        success: false,
        message: 'Company not found' 
      });
    }

    if (!company.products_pdf || !company.products_pdf.url) {
      return res.status(404).json({ 
        success: false,
        message: 'No products PDF found for this company' 
      });
    }

    const filePath = path.join(__dirname, '../../uploads/pdfs/', path.basename(company.products_pdf.url));
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    company.products_pdf = undefined;
    await company.save();

    res.status(200).json({
      success: true,
      message: 'Products PDF deleted successfully'
    });

  } catch (error) {
    console.error('Error in deleteProductsPDF:', error);
    res.status(500).json({ 
      success: false,
      message: 'Server error', 
      error: error.message 
    });
  }
};

// @desc    Delete opportunities PDF for a company
// @route   DELETE /api/upload/company/:companyId/opportunities-pdf
// @access  Private/Admin
export const deleteOpportunitiesPDF = async (req, res) => {
  try {
    const { companyId } = req.params;
    
    const company = await Company.findOne({ id: parseInt(companyId) });
    
    if (!company) {
      return res.status(404).json({ 
        success: false,
        message: 'Company not found' 
      });
    }

    if (!company.opportunities_pdf || !company.opportunities_pdf.url) {
      return res.status(404).json({ 
        success: false,
        message: 'No opportunities PDF found for this company' 
      });
    }

    const filePath = path.join(__dirname, '../../uploads/pdfs/', path.basename(company.opportunities_pdf.url));
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    company.opportunities_pdf = undefined;
    await company.save();

    res.status(200).json({
      success: true,
      message: 'Opportunities PDF deleted successfully'
    });

  } catch (error) {
    console.error('Error in deleteOpportunitiesPDF:', error);
    res.status(500).json({ 
      success: false,
      message: 'Server error', 
      error: error.message 
    });
  }
};