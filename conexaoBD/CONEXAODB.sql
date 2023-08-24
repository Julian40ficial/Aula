Create Table categorias_prod (
  categoria_id INTEGER primary key,
  nome_categoria TEXT not null
);

Create Table enderecos (
  endereco_id INTEGER primary key,
  rua TEXT not null,
  bairro TEXT not null,
  numero TEXT not null,
  cep TEXT not null
 );

Create Table Fornecedores( 
  fornecedor_id INTEGER primary key,
  nome TEXT not null,
  telefone TEXT not null,
  email TEXT not null,
  endereco_id INTEGER,
   foreign key (endereco_id) references enderecos(endereco_id)
);


Create Table PRODUTOS (
  produto_id INTEGER primary key,
  nome_produto TEXT not null,
  preco_unidade REAL not null,
  fornecedor_id INTEGER,
  categoria_id INTEGER,
  estoque INTEGER not null,
  
 foreign key (fornecedor_id) references Fornecedores (fornecedor_id),
 foreign key (categoria_id) references categorias_prod (categoria_id)

);

Create Table cargo(

id_cargo INTEGER primary key not null,
nome_cargo text not null,


foreign key (id_cargo) references funcionarios (funcionario_id)
);




  Create Table funcionarios (
  funcionario_id INTEGER primary key,
  nome TEXT not null,
  telefone TEXT not null,
  email TEXT not null,
  cargo TEXT not null,
  valor_por_hora REAL not null,
  data_contratacao DATE not null,
  endereco_id INTEGER,
  
foreign key (endereco_id) references enderecos (endereco_id)
);



Create Table clientes(
  cliente_id INTEGER primary key,
  nome TEXT not null,
  telefone TEXT not null,
  email TEXT not null,
  Data_de_Cadastro date not null
  

  );


Create Table vendas(
  venda_id INTEGER primary key,
  data_venda DATE not null,
  funcionario_id INTEGER,
  cliente_id INTEGER,
  valor_total REAL not null,
  
foreign key (funcionario_id) references funcionarios (funcionario_id),
foreign key (cliente_id) references clientes (cliente_id)

);



-------------------------------------------------------------------------------------------------------------------------------------
select * from enderecos;
Insert Into enderecos( endereco_id,rua ,bairro,numero,cep)

       values (1,'Avenida Sebastião Coelho de Souza','Centro',100,29820970),

                  (2,'Rua Floriano Peixoto','centro' ,52,36704970),

                       (3,'Rua Cinco','centro', 484,78635970);
                                

-------------------------------------------------------------------------------------------------------------------------
select * from Fornecedores;
Insert Into Fornecedores(fornecedor_id,nome,telefone,email,endereco_id)
       values (1,'José da Silva','674499-5566','jodedasilv12@hotmail.com',3),


     (2,'Célia Maria','6799854-4741','celimari78@hotmail.com',3),


           (3,'Giana Alvez','(67)8412-4685','gigialvez2@hgmail.com',1),


               (4,'Mario Quintana','679852-1323','mario56@gmail.com',2);
               

---------------------------------------------------------------------------------------------------------------------------
select * from categorias_prod;
Insert Into categorias_prod(categoria_id,nome_categoria)
       values(1, 'LIMPEZA '),
               (2,'COMIDA_CONGELADA'),
                   (3,'COMIDA_FRESCAS'),
                      (4, 'VERDURAS '),
                          (5,'VEGETAIS'),
                             (6,'FRUTAS '),
                                (7,'HIGIENE_PESSOAL' );
                                
               
------------------------------------------------------------------------------------------------------------------------------
SELECT * FROM PRODUTOS;
Insert Into PRODUTOS(produto_id,nome_produto,preco_unidade,fornecedor_id, categoria_id,estoque)
       values(null,'Arroz',20.00,1,1,50),

                (2,'Feijao',8.50,1,1,30),

                    (3,'Oleo de Soja', 5.00,1,2,40),

                         (4,'Leite Integral',3.50,2,1,25);


--------------------------------------------------------------------------------------------------------------------------------
select * from funcionarios;
Insert Into Funcionarios
     values (null,'Joao da Silva','678245-4545','joaofransilva@hotmail.com','Vendedor',40.00,'2022-01-15', 1),


                 (null,'Maria Souza','673323-7684','marisouza@hotmail.com','Caixa',20.00 ,'2021-08-05', 2),


                    ( null,'Pedro Santos','679876-4756','pedrosantos@gmail.com','Gerente',30.00,'2020-03-20', 2);

----------------------------------------------------------------------------------------------------------------------------------
 select * from clientes;
Insert Into clientes(cliente_id,nome,telefone,email,Data_de_Cadastro)
         values(1,'Ana Oliveira',677946-2147,'ana.oliveira@gmail.com',2022-02-10),
                   (2,'Carlos Silva','679874-2547','carlos.silva@gmail.com',2021-09-25),
                       (3,'Laura Santos','641582-5874','laura.santos@gmail.com',2020-05-15);

                                


  -----------------------------------------------------------------------------------------------------
  select * from vendas;
    Insert Into  vendas
            values (1,'2023-07-10',1,1,45.00),

                (2,'2023-07-12',2,2,35.00),

                    (3,'2023-07-15',3,1,250.00),

                        (4,'2023-07-20',2,3,15.00),

                                (5,'2023-07-25',3,2,80.00);

-------------------------------------------------------------------------------------------------------------------
select * from cargo;
Insert  Into cargo(nome_cargo)
values ('Vendedor'),
            ('Caixa'),
            ('Gerente');




SELECT COUNT(*) FROM FUNCIONARIOS WHERE ENDERECO_ID = 2;
SELECT * FROM ENDERECOS;

SELECT FUNC.NOME, ENDE.RUA FROM FUNCIONARIOS FUNC
    LEFT JOIN ENDERECOS ENDE ON ENDE.ENDERECO_ID = FUNC.ENDERECO_ID