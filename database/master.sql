CREATE TABLE IF NOT EXISTS  auth_user (
    id SERIAL,
    email_id VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    first_name VARCHAR(48),
    last_name VARCHAR(48),
    zip_code VARCHAR(8),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS product (
    id SERIAL,
    product_name VARCHAR(48),
    product_price INT,
    PRIMARY KEY(id)
);

ALTER TABLE auth_user add COLUMN IF NOT EXISTS user_password VARCHAR(255);