insert into BIERSORTE (ID, NAME) values
('d03bec2c-2a94-4977-a3d0-2a3191a11e22', 'Ale'),
('0744fa5b-cf39-4238-8b94-cbc09f37b95e', 'Bock'),
('a5fa81c2-3cde-406b-a413-295502f3f16e', 'Lager'),
('2bedef67-c890-4fad-8500-9f086805bf1f', 'Pilsener'),
('6cc2f710-b216-43a5-ade6-baea22d0d2f8', 'Porter'),
('face6b0c-1039-459e-9fc9-447f19fb99ce', 'Weizen');

insert into BIERTYP (id, name, biersorte_id) values
('310fdfce-3483-4e58-83f8-8e040476eba7', 'Alkoholfreies/-armes', null),

('b547bf2a-efb5-4961-be9b-b89ac794e86c', 'Belgisches Blonde Ale', 'd03bec2c-2a94-4977-a3d0-2a3191a11e22'),
('d0e030cc-49f4-45b0-a2a1-ee98c1cedb1e', 'Belgisches Dubble/Triple Ale', 'd03bec2c-2a94-4977-a3d0-2a3191a11e22'),
('1d9bd905-719e-4e02-bf07-612ee0edd0e3', 'Belgisches Dunkel Ale', 'd03bec2c-2a94-4977-a3d0-2a3191a11e22'),
('440d550a-2df3-4677-8582-04414e034c9f', 'Belgisches Witbier/Blanche Ale', 'd03bec2c-2a94-4977-a3d0-2a3191a11e22'),
('568d0f21-eea3-4191-9d56-593582576527', 'Bitter Ale', 'd03bec2c-2a94-4977-a3d0-2a3191a11e22'),
('87a1a6c2-25d8-4ec5-bfc6-faf54378e9a5', 'Brown Ale', 'd03bec2c-2a94-4977-a3d0-2a3191a11e22'),
('9e4fa9c1-d32f-431b-8593-723208d08e70', 'Cascadian Dark Ale', 'd03bec2c-2a94-4977-a3d0-2a3191a11e22'),
('8c3b0aaf-4bde-4731-91cc-b0d77b0f9b50', 'Französisches Ale', 'd03bec2c-2a94-4977-a3d0-2a3191a11e22'),
('91aaa3c6-d04c-43e2-8660-c2225c547e63', 'India Pale Ale', 'd03bec2c-2a94-4977-a3d0-2a3191a11e22'),
('fe03d1c3-ec43-4acd-a275-bf32ad657847', 'Irish Ale', 'd03bec2c-2a94-4977-a3d0-2a3191a11e22'),
('797dcb1b-c465-4b3d-9af1-6fa2e7a65c1c', 'Mild Ale', 'd03bec2c-2a94-4977-a3d0-2a3191a11e22'),
('9ec8e14f-beb7-47de-8508-a1456d3982ef', 'Old Ale', 'd03bec2c-2a94-4977-a3d0-2a3191a11e22'),
('2a12acea-bf22-4a4e-a2d8-33047da0fd4c', 'Pale Ale', 'd03bec2c-2a94-4977-a3d0-2a3191a11e22'),
('10372ea0-1d67-41ad-9967-3c3e274755ca', 'Scottish Ale', 'd03bec2c-2a94-4977-a3d0-2a3191a11e22'),
('ee62f848-ded1-4813-b4aa-e4a1cf5444b1', 'Strong Ale', 'd03bec2c-2a94-4977-a3d0-2a3191a11e22'),

('6cc467d7-f7bc-4a73-8199-1329808c21de', 'Altbier', null),
('94dbcb9d-5b9e-407d-b6a9-4b3a8f8953d9', 'Barley Wine', null),

('c9d021f4-3107-4bbd-aadb-e749cd2d59a0', 'Heller Doppelbock', '0744fa5b-cf39-4238-8b94-cbc09f37b95e'),
('2dbe4d7c-bb91-4138-aae4-b80d1fc771d7', 'Dunkler Doppelbock', '0744fa5b-cf39-4238-8b94-cbc09f37b95e'),
('147ce340-5075-426e-89c5-e59156c1ecff', 'Dunkles Bockbier', '0744fa5b-cf39-4238-8b94-cbc09f37b95e'),
('fe3fc3f0-844d-4eb2-ae4e-908259fe5a58', 'Eisbock', '0744fa5b-cf39-4238-8b94-cbc09f37b95e'),
('19d1acd3-9251-4434-9e47-f424c2550868', 'Helles Bockbier', '0744fa5b-cf39-4238-8b94-cbc09f37b95e'),
('dc12bed6-b1e0-4b30-b78b-5c0e8dca4aef', 'Maibock', '0744fa5b-cf39-4238-8b94-cbc09f37b95e'),

('7b031f02-5af3-4646-bb47-75e67a310557', 'California common', null),
('742afe3d-c097-407d-ac94-f7d323058c0a', 'Dinkelbier', null),
('06f210b5-a94f-4d72-892b-183caeb8968f', 'Emmerbier', null),
('7e5b1e90-a6a1-489a-aba1-a77123b3f6c0', 'Sauerbier', null),
('5fa6c72b-c192-49de-9604-d8f07022bec4', 'Frucht, Gewürz- und Kräuterbiere', null),
('42fb92a3-1c06-4210-abb4-d368c34fadcc', 'Ingwerbier/Ginger beer', null),
('1bdb8cf3-e789-4c94-8c86-39ba2818040b', 'Kellerbier', null),

('8160b8dc-e567-449a-bdb0-99bb127989fd', 'American Lager', 'a5fa81c2-3cde-406b-a413-295502f3f16e'),
('49970b82-ae2a-40b5-b1c7-07bd23ab4288', 'Helles', 'a5fa81c2-3cde-406b-a413-295502f3f16e'),
('4eb9211a-6743-49d6-a9e8-99755ecf5f90', 'Dunkles Lager', 'a5fa81c2-3cde-406b-a413-295502f3f16e'),
('341ed3d6-77d1-43a5-b164-f65aa828d352', 'Export', 'a5fa81c2-3cde-406b-a413-295502f3f16e'),
('6c8c5d98-52b9-4180-90dc-bc935ebecec2', 'Märzen/Oktoberfest', 'a5fa81c2-3cde-406b-a413-295502f3f16e'),
('99b628cc-e5e7-4d0f-902f-0c13a2514058', 'Schwarzbier', 'a5fa81c2-3cde-406b-a413-295502f3f16e'),

('e692b360-3dde-4fc9-aa51-f16a9fbcfb73', 'Kölsch', null),
('96e91082-0302-497c-8268-1b44e8500dae', 'Malzbier', null),
('0bceef6a-8e98-4f02-bce9-ffb697f1550c', 'Met', null),

('36f02e21-3ff5-4226-a235-958e633d5cac', 'American Pilsner', '2bedef67-c890-4fad-8500-9f086805bf1f'),
('0bceba83-6be7-4513-84b7-206f80a09ffe', 'Böhmisches Pilsner', '2bedef67-c890-4fad-8500-9f086805bf1f'),
('094b9b59-9996-45e6-968d-a233af5607fe', 'Deutsches Pilsner', '2bedef67-c890-4fad-8500-9f086805bf1f'),
('0d3afc37-9e21-47cb-b93f-e034688f82fc', 'Imperial Pilsner', '2bedef67-c890-4fad-8500-9f086805bf1f'),

('98979dfa-7826-42dd-b4da-6a97ebd4ef63', 'Brown Porter', '6cc2f710-b216-43a5-ade6-baea22d0d2f8'),
('962b9c2d-b493-4775-9f72-20d31137ff66', 'Baltic Porter', '6cc2f710-b216-43a5-ade6-baea22d0d2f8'),
('5d2ad520-e520-46db-8219-e8da2cf0cb81', 'Robust Porter', '6cc2f710-b216-43a5-ade6-baea22d0d2f8'),

('2ad9967c-e6a3-4d4e-a250-681db200b23b', 'Rauchbier', null),
('d06df23e-39ab-408b-8f75-6b52184374ce', 'Roggenbier', null),
('eb9a0d70-11e0-4faa-88bd-bf426997ea88', 'Saison', null),
('65bba11f-71e3-45aa-a234-a74458228030', 'Stout', null),

('3db1f045-cc73-453b-b900-9cecb1e191aa', 'Weizenbock', 'face6b0c-1039-459e-9fc9-447f19fb99ce'),
('215755ab-73b9-4e4e-a41b-69239aa4f78a', 'Dunkles Hefeweizen', 'face6b0c-1039-459e-9fc9-447f19fb99ce'),
('36c42511-7bae-45be-b422-7f6796a27937', 'elles Hefeweizen', 'face6b0c-1039-459e-9fc9-447f19fb99ce');