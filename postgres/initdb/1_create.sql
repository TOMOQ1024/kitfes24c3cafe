CREATE TABLE item (
    id          serial      not null primary key,
    name        text        not null,
    sales       int         not null,
    img_src     text,
    tags        serial      not null
);

CREATE TABLE tags (
    id          serial      not null primary key,
    name        text
)
