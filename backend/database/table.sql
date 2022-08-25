create table blog (
    id varchar(255) not null,
    title varchar(255) not null,
    body nvarchar(max) not null,
    createdat Date default current_timestamp not null,
    modifiedat Date,
    deletedat Date
)