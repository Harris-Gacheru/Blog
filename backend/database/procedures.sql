-- get all blogs
-- create or alter procedure getAllBlogs
-- as
-- begin

-- select * from blog where deletedat = null

-- end

-- get blog
-- create or alter procedure getBlog @id varchar(255)
-- as
-- begin

-- select * from blog where id = @id

-- end

-- create blog
-- create or alter procedure createBlog @id varchar(255), @title varchar(255), @body nvarchar(max)
-- as
-- begin

-- insert into blog(id, title, body)
-- values(@id, @title, @body)

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

-- update blog 
-- set deletedat = current_timestamp
-- where id = @id

-- end