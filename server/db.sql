-- SQLBook: Code
-- Active: 1714393152209@@127.0.0.1@3306@quick_job
-- create database quick_job;

show tables;

select * from user;

select * from post; 

update post set status = "ONGOING" where status = "CANCELED";

delete from user;
delete from post where id = "9cabb3ea-3555-4ffb-882b-506d6b11f398";

desc post;

ALTER TABLE post DROP INDEX Post_creatorId_key;
