--
-- PostgreSQL database dump
--

-- Dumped from database version 16.3
-- Dumped by pg_dump version 16.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO postgres;

--
-- Name: dates; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.dates (
    id integer NOT NULL,
    fecha timestamp with time zone,
    "año" integer,
    mes integer,
    dia integer,
    "createdAt" timestamp with time zone DEFAULT '2024-07-06 17:53:17.092-05'::timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT '2024-07-06 17:53:17.092-05'::timestamp with time zone NOT NULL
);


ALTER TABLE public.dates OWNER TO postgres;

--
-- Name: dates_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.dates_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.dates_id_seq OWNER TO postgres;

--
-- Name: dates_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.dates_id_seq OWNED BY public.dates.id;


--
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    id integer NOT NULL,
    nombre character varying(255),
    fabricante character varying(255),
    precio double precision,
    serie character varying(255),
    tamano double precision,
    material character varying(255),
    movilidad boolean,
    piezas integer,
    combinable boolean,
    imagen bytea,
    "createdAt" timestamp with time zone DEFAULT '2024-07-06 17:53:17.038-05'::timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT '2024-07-06 17:53:17.038-05'::timestamp with time zone NOT NULL
);


ALTER TABLE public.products OWNER TO postgres;

--
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.products_id_seq OWNER TO postgres;

--
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;


--
-- Name: transaccions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.transaccions (
    id integer NOT NULL,
    direccion character varying(255),
    cantidad integer,
    estado character varying(255),
    "createdAt" timestamp with time zone DEFAULT '2024-07-06 17:53:17.119-05'::timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT '2024-07-06 17:53:17.119-05'::timestamp with time zone NOT NULL,
    "fechaTransaccion" timestamp with time zone,
    "ProductoNombre" character varying(255),
    "nombreUsuario" character varying(255)
);


ALTER TABLE public.transaccions OWNER TO postgres;

--
-- Name: transaccions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.transaccions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.transaccions_id_seq OWNER TO postgres;

--
-- Name: transaccions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.transaccions_id_seq OWNED BY public.transaccions.id;


--
-- Name: usuarios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuarios (
    id integer NOT NULL,
    nombre character varying(255),
    apellido character varying(255),
    correo character varying(255),
    "contraseña" character varying(255),
    tipo character varying(255),
    "createdAt" timestamp with time zone DEFAULT '2024-07-06 17:53:17.07-05'::timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT '2024-07-06 17:53:17.07-05'::timestamp with time zone NOT NULL
);


ALTER TABLE public.usuarios OWNER TO postgres;

--
-- Name: usuarios_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.usuarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.usuarios_id_seq OWNER TO postgres;

--
-- Name: usuarios_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.usuarios_id_seq OWNED BY public.usuarios.id;


--
-- Name: dates id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.dates ALTER COLUMN id SET DEFAULT nextval('public.dates_id_seq'::regclass);


--
-- Name: products id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


--
-- Name: transaccions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transaccions ALTER COLUMN id SET DEFAULT nextval('public.transaccions_id_seq'::regclass);


--
-- Name: usuarios id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios ALTER COLUMN id SET DEFAULT nextval('public.usuarios_id_seq'::regclass);


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."SequelizeMeta" (name) FROM stdin;
20240630232857-create-product.js
20240630233404-create-usuario.js
20240630234109-create-date.js
20240630235728-create-transaccions.js
20240630235729-unique-fecha.js
20240630235729-unique-producto.js
20240630235729-unique-usuarios.js
20240701133333-add-fecha.js
20240701133333-add-product.js
20240701133333-add-usuario.js
\.


--
-- Data for Name: dates; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.dates (id, fecha, "año", mes, dia, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products (id, nombre, fabricante, precio, serie, tamano, material, movilidad, piezas, combinable, imagen, "createdAt", "updatedAt") FROM stdin;
1	LEGO Stitch	LEGO	70	Disney	8.3	silk	f	28	t	https://lh3.googleusercontent.com/pw/AP1GczM8Ncby-M1fwAExeM89_T3a1tD9XWsjUlG9IQHFPC7xElmVrjKKEQ1-hCYlYpKQYpIdtkg6im6hiJA10pH4-JOEJh4GJhjFaoHApzx6Tc3abZDKI_4jD5-pvPh0zyHJimuVsMhivaMhL1mXSEL7OrU=w370-h370-s-no-gm	2024-07-06 17:53:17.038-05	2024-07-06 17:53:17.038-05
2	Barbie Car	Mattel	25	Barbie	19.4	polyester	f	93	f	https://lh3.googleusercontent.com/pw/AP1GczOVUAa4B7s79L-t2tlud2XXtRNQnoNZ_aVK7ulXiBAJTJJ0V10k-3A31DQLX7VyYt53UUxeegMI9e62BOe1H0EMDHnI-E0Qmt5V-NErGHflOvb1MGiDH_IYUn-vIrITZLIMUb1P8b-MhCIeYx_6jUY=w370-h370-s-no-gm	2024-07-06 17:53:17.038-05	2024-07-06 17:53:17.038-05
3	Godzilla Toy	Toho Co	95	Godzilla	18.8	polyester	f	44	t	https://lh3.googleusercontent.com/pw/AP1GczP7IRZKHyE0ARhB1Zj-llAjS3RCZHRvHBf9FtZIFCeExvelO3e9SodCVmLeXNNHmUIfUtfc1Dt-7QFoGM3svnbCwwv35VgMuUvN8-r33lF6Y4lcKS07qQdayCqiaacjG8_lbgwvdJm3ZQrKjZUhIAE=w370-h370-s-no-gm	2024-07-06 17:53:17.038-05	2024-07-06 17:53:17.038-05
4	Woody Figure	Hasbro	38	Toy Story	28.2	cotton	f	100	f	https://lh3.googleusercontent.com/pw/AP1GczPSSLZ1TcZ30PXxNLOip9Bn1a1G5izImIOowA4yXoYd2VSd828e6RaGI31h4h4eM-OgUQZ5wYTPk6SqC0FWjfzMQu4hPrPdKncVs8K3KJ63NsMnqMUM1KkikJY7PsVB6SiFH3nAgbktdHuVUIhVqV4=w370-h370-s-no-gm	2024-07-06 17:53:17.038-05	2024-07-06 17:53:17.038-05
5	Goku Figura	Bandai	95	Dragon Ball Z	9.6	cotton	f	42	t	https://lh3.googleusercontent.com/pw/AP1GczOGw1sMDd9i-Gbt7xpSOoSdMvPBBrhBrb4NFh2ruaQyCMo6AH-Ngnzxg2LFPz98K5205IWnZLsWMHkZd6bfkF530CGhlrYFikKEzTkBz51ixBwgemNaeccFwyttWi2U4szQgkejxo5wQbd6M74riv0=w370-h370-s-no-gm	2024-07-06 17:53:17.038-05	2024-07-06 17:53:17.038-05
6	Mewtwo Toy	Pokemon	44	Pokemon	25.2	leather	f	14	f	https://lh3.googleusercontent.com/pw/AP1GczOrXLbnMKbXi_f2LGG3YrCmTtq5zjsIxPkT1YRcYQsH-XZEwSjOliX-pIHhVjb5GpT0otzdgEVfkq9GhpjVcyEcp6deF-I6M8ill6R-8sMG17o1u3BPKfIahZs7tz_axlvUsXfXBi8hl3Qw1ikHx8Q=w370-h370-s-no-gm	2024-07-06 17:53:17.038-05	2024-07-06 17:53:17.038-05
7	Han Solo Con Cerdo	Funko	48	Star Wars	21.6	polyester	t	46	f	https://lh3.googleusercontent.com/pw/AP1GczNlPORjVnFl3De5YE3qQOVKYF8LyFkFY52HJJjSewg8Iz1bUgjI8DU0fSy44593sImCJszNjpuQGlG8XCsvlzaQc070YLj3ldXl1dnC_dINbYH8RSqFw4ybYDyGt1kQUFpvZb-5KyaJXVIUrC4agXk=w370-h370-s-no-gm	2024-07-06 17:53:17.038-05	2024-07-06 17:53:17.038-05
8	Ryu Figurine	Capcom	56	Street Fighter	24.7	nylon	f	37	f	https://lh3.googleusercontent.com/pw/AP1GczNWTdCmG7iSd-kCeKMx80-lH1R7lJ_XUhBkxQellW29f15ZP3pb1FEzq63t8dxQxCMzaPASD73WBv7liVuylhVi4uLVp-luCsooCEMf9BeMZRtgpySN4Oco_fzXAb9GPm8Vf1IRdmbrRD3Fwhyo3nY=w370-h370-s-no-gm	2024-07-06 17:53:17.038-05	2024-07-06 17:53:17.038-05
9	Perrito Peluche	Generic	41	Random Series	13.4	wool	f	22	t	https://lh3.googleusercontent.com/pw/AP1GczPy2reIhqiYvH99NOGeSD6Fq92WF7Fe6MjSoWBIwV-5zWhUCPVejjhPKGcWnzUBAt5lOFrFARD0U3D3Gq3D2zgpvz6msLYgr9KJtUoZfvKpqVE5v-WmpwfAKZJ6pVe9D2528gqS_Z6Nq7R1u2UMxOg=w370-h370-s-no-gm	2024-07-06 17:53:17.038-05	2024-07-06 17:53:17.038-05
10	Garfield	Mattel	90	Another Series	10.9	wool	f	66	f	https://lh3.googleusercontent.com/pw/AP1GczMusgr48j5rp4n4aI_1OvY1iplqsiZBbFUEn91qKHmVQWyYG8rOr77q8uBScPLYAqqE6CQxZ1b4Yx9x7jCdT3o39dY5EQW0I24OV2QHUdSjxV_KJIV23Kl6ZOehjpGHTdQ5KEQkcjKJwU1yQUCAbo8=w370-h370-s-no-gm?authuser=2	2024-07-06 17:53:17.038-05	2024-07-06 17:53:17.038-05
\.


--
-- Data for Name: transaccions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.transaccions (id, direccion, cantidad, estado, "createdAt", "updatedAt", "fechaTransaccion", "ProductoNombre", "nombreUsuario") FROM stdin;
\.


--
-- Data for Name: usuarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuarios (id, nombre, apellido, correo, "contraseña", tipo, "createdAt", "updatedAt") FROM stdin;
5	Nani	Grupo5	juan.perez@example.com	securepassword123	usuario	2024-07-06 19:25:30.048-05	2024-07-06 19:25:30.048-05
1	john	snown	johns@gmail.com	1235	usuario	2024-07-06 17:53:17.07-05	2024-07-06 20:59:05.52-05
6	Jesus	Lujan	jesuslujan@gmail.com	1235	usuario	2024-07-06 20:28:02.473-05	2024-07-06 21:02:39.936-05
2	Juan	Pérez	juan.perez@example.com	1235	usuario	2024-07-06 19:23:38.059-05	2024-07-06 21:03:48.115-05
7	asd	asd	asd@example.com	1235	usuario	2024-07-06 21:08:40.212-05	2024-07-06 21:09:03.915-05
\.


--
-- Name: dates_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.dates_id_seq', 1, false);


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_id_seq', 1, false);


--
-- Name: transaccions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.transaccions_id_seq', 1, false);


--
-- Name: usuarios_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usuarios_id_seq', 7, true);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: dates dates_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.dates
    ADD CONSTRAINT dates_pkey PRIMARY KEY (id);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- Name: transaccions transaccions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transaccions
    ADD CONSTRAINT transaccions_pkey PRIMARY KEY (id);


--
-- Name: dates unique_fecha_constraint; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.dates
    ADD CONSTRAINT unique_fecha_constraint UNIQUE (fecha);


--
-- Name: usuarios unique_nombreU_constraint; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT "unique_nombreU_constraint" UNIQUE (nombre);


--
-- Name: products unique_nombre_constraint; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT unique_nombre_constraint UNIQUE (nombre);


--
-- Name: usuarios usuarios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id);


--
-- Name: transaccions transaccions_ProductoNombre_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transaccions
    ADD CONSTRAINT "transaccions_ProductoNombre_fkey" FOREIGN KEY ("ProductoNombre") REFERENCES public.products(nombre) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: transaccions transaccions_fechaTransaccion_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transaccions
    ADD CONSTRAINT "transaccions_fechaTransaccion_fkey" FOREIGN KEY ("fechaTransaccion") REFERENCES public.dates(fecha) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: transaccions transaccions_nombreUsuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transaccions
    ADD CONSTRAINT "transaccions_nombreUsuario_fkey" FOREIGN KEY ("nombreUsuario") REFERENCES public.usuarios(nombre) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- PostgreSQL database dump complete
--

