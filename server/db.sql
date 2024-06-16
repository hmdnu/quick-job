-- SQLBook: Code
-- Active: 1714393152209@@127.0.0.1@3306@quick_job
-- create database quick_job;

show tables;

select * from user;

select * from post; 

delete from user;
delete from post;

desc post;

ALTER TABLE post DROP INDEX Post_creatorId_key;
