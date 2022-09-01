create table blog (
    id varchar(255) not null,
    title varchar(255) not null,
    body nvarchar(max) not null,
    coverImage nvarchar(max),
    createdat Datetime default current_timestamp not null,
    modifiedat Datetime,
    deletedat Datetime
)

-- drop table blog

-- select * from blog

-- alter table blog
-- add coverImage nvarchar(max)