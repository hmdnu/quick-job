-- SQLBook: Code
-- Active: 1717757693371@@127.0.0.1@3306@quick_job
-- create database quick_job;

show tables;

select * from user;

select * from post; 

update post set status = "ONGOING" where status = "CANCELED";

delete from user;
delete from post;

desc post;

ALTER TABLE post DROP INDEX Post_creatorId_key;
