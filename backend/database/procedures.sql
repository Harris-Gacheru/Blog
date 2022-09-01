-- get all blogs
-- create or alter procedure getAllBlogs
-- as
-- begin

-- select id, title, body, coverImage, format(createdat, 'dd-mm-yyyy') as createdat, format(createdat, 'dd-mm-yyyy') as modifiedat, format(createdat, 'dd-mm-yyyy') as deletedat from blog where deletedat is null
-- order by createdat desc

-- end

-- get blog
-- create or alter procedure getBlog @id varchar(255)
-- as
-- begin

-- select id, title, body, coverImage, format(createdat, 'dd-mm-yyyy') as createdat, format(createdat, 'dd-mm-yyyy') as modifiedat, format(createdat, 'dd-mm-yyyy') as deletedat from blog where id = @id

-- end

-- create blog
-- create or alter procedure createBlog @id varchar(255), @title varchar(255), @body nvarchar(max), @coverImage nvarchar(max)
-- as
-- begin

-- insert into blog(id, title, body, coverImage)
-- values(@id, @title, @body, @coverImage)

-- end

-- update blog
-- create or alter procedure updateBlog @id varchar(255), @title varchar(255), @body nvarchar(max)
-- as
-- begin

-- update blog
-- set title = @title, body = @body, modifiedat = current_timestamp
-- where id = @id

-- end

-- delete blog
-- create or alter procedure deleteBlog @id varchar(255)
-- as
-- begin

-- -- soft delete
-- update blog 
-- set deletedat = current_timestamp
-- where id = @id

-- --hard delete
-- delete from blog
-- where id = @id

-- end