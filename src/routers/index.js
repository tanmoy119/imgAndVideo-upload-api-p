const express = require('express');
const content = require('../models/content');
const indexRouter = express.Router();
const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: process.env.cloud_name, 
    api_key: process.env.api_key, 
    api_secret: process.env.api_secret,
    secure: true
  })


  indexRouter.get('/data', async(req, res)=>{
    try {
        const data = await content.find({});
        res.status(200).send(data);
    } catch (err) {
        res.status(400).send(err);
    }
  })
  indexRouter.get('/data/id', async(req, res)=>{
    try {
        const _id = req.query.id;
        const data= await content.find({_id});
        res.status(200).send(data);
    } catch (err) {
        res.status(400).send(err);
    }
  })



  indexRouter.post('/upload', async (req, res)=>{
    const filePhoto = req.files.photo;
     const fileVideo = req.files.video;
     console.log(req.body);
    cloudinary.uploader.upload(fileVideo.tempFilePath,{resource_type:"video"},(err,result1)=>{
        
        if (err) {
            res.status(400).send(err);
            console.log(err);
        }else{
            console.log(result1);
            cloudinary.uploader.upload(filePhoto.tempFilePath, async(err,result2)=>{
                if (err) {
                    res.status(400).send(err);
                    console.log(err);
                }else{
                    const adata = new content({
                     title:req.body.title,
                     description: req.body.description,
                     thumbnail: result2.url,
                     video: result1.url   
                    });

                    const sdata = await adata.save();
                    console.log(sdata);
                res.status(201).send({sdata});
                }

            })
            
        }
    });
  })



  module.exports = indexRouter;