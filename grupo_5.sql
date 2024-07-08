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
1	LEGO Stitch	LEGO	70	Disney	8.3	silk	f	28	t	\\x68747470733a2f2f6c68332e676f6f676c6575736572636f6e74656e742e636f6d2f70772f41503147637a4d384e6362792d4d316677414578654d38395f543361317444395857736a556c47394951484650433778456c6d56726a4b4b4551312d6843596c59704b5159704964746b6736696d3668694a4131307048342d4a4f454a6834474a686a46616f4841707a783654633361625a444b495f346a44352d70765068307a79484a696d7556734d686976614d684c316d5853454c374f72553d773337302d683337302d732d6e6f2d676d	2024-07-06 17:53:17.038-05	2024-07-06 17:53:17.038-05
2	Barbie Car	Mattel	25	Barbie	19.4	polyester	f	93	f	\\x68747470733a2f2f6c68332e676f6f676c6575736572636f6e74656e742e636f6d2f70772f41503147637a4f565541613442377337394c2d7432746c756432585874524e516e6f4e5a5f61564b37756c586942414a544a4a305631306b2d3341333144514c58375679597435335555786565674d4939653632424f65314830454d44486e492d4530516d7435562d4e45724748666c4f7662314d476944485f4959556e2d76497249545a4c494d5562315038622d4d6843496559785f366a55593d773337302d683337302d732d6e6f2d676d	2024-07-06 17:53:17.038-05	2024-07-06 17:53:17.038-05
3	Godzilla Toy	Toho Co	95	Godzilla	18.8	polyester	f	44	t	\\x68747470733a2f2f6c68332e676f6f676c6575736572636f6e74656e742e636f6d2f70772f41503147637a503749525a4b4879453041526842315a6a2d6c6c416a533352435a4852764842663946745a49464365457876656c4f336539536f6443566d4c65584e4e486d554966557466633144742d3751466f474d3373766e6243777776333556674d7555764e382d7233336c463659346c634b53303771516461794371696161636a47385f6c62677776644a6d335a51724b6a5a55684941453d773337302d683337302d732d6e6f2d676d	2024-07-06 17:53:17.038-05	2024-07-06 17:53:17.038-05
4	Woody Figure	Hasbro	38	Toy Story	28.2	cotton	f	100	f	\\x68747470733a2f2f6c68332e676f6f676c6575736572636f6e74656e742e636f6d2f70772f41503147637a5053534c5a3154635a33305058784e4c4f697039426e3161314735697a496d494f6f77413479586f596432565364383238653652614749333168346834654d2d4f6755515a35775954506b365371433046576a667a4d51753468507250644b6e635673384b334b4a36334e734d6e714d554d314b6b696b4a5937507356423653694648336e4167626b7464487556554968567156343d773337302d683337302d732d6e6f2d676d	2024-07-06 17:53:17.038-05	2024-07-06 17:53:17.038-05
5	Goku Figura	Bandai	95	Dragon Ball Z	9.6	cotton	f	42	t	\\x68747470733a2f2f6c68332e676f6f676c6575736572636f6e74656e742e636f6d2f70772f41503147637a4f477731734d446439692d476274377870534f6f53644d765042427268427262344e4668327275615179434d6f3641482d4e676e7a7867324c46507a39384b3532303549576e5a4c73574d486b5a643662666b463533304347686c725946696b4b457a546b427a35316978427767656d4e6165636346777974745769325534737a51676b656a786f3577516264364d3734726976303d773337302d683337302d732d6e6f2d676d	2024-07-06 17:53:17.038-05	2024-07-06 17:53:17.038-05
6	Mewtwo Toy	Pokemon	44	Pokemon	25.2	leather	f	14	f	\\x68747470733a2f2f6c68332e676f6f676c6575736572636f6e74656e742e636f6d2f70772f41503147637a4f72584c626e4d4b6258695f66324c4747335972436d547471357a6a734978506b5431595263595173482d585a4577536a4f6c69582d70494868566a6235477054306f747a64674556666b71394768706a566379456370366465462d49364d38696c6c36522d38734d4731376f31753342504b664961685a7337747a5f61786c765573586658426938686c33517731696b487838513d773337302d683337302d732d6e6f2d676d	2024-07-06 17:53:17.038-05	2024-07-06 17:53:17.038-05
7	Han Solo Con Cerdo	Funko	48	Star Wars	21.6	polyester	t	46	f	\\x68747470733a2f2f6c68332e676f6f676c6575736572636f6e74656e742e636f6d2f70772f41503147637a4e6c504f526a566e466c3344653559453371514f564b5946384c79466b46593532484a4a6a5365776738497a316255676a4938445530665379343435393373496d434a737a4e6a707551476c4738584373766c7a615163303730594c6a336c64586c31646e435f64494e6259483852537146773479625944794774316b51554670765a622d354b79614a585649557243346167586b3d773337302d683337302d732d6e6f2d676d	2024-07-06 17:53:17.038-05	2024-07-06 17:53:17.038-05
8	Ryu Figurine	Capcom	56	Street Fighter	24.7	nylon	f	37	f	\\x68747470733a2f2f6c68332e676f6f676c6575736572636f6e74656e742e636f6d2f70772f41503147637a4e575464436d47376953642d6b43654b4d7838302d6c483152376c4a5f585568426b7851656c6c5732396631355a503370623146457a713633743864785178434d7a61504153443733574276376c695675796c68566934754c56702d6c7543736f6f43454d663942654d5a5274677079534e344f636f5f667a5841623947506d385666314952646d6272524433467768796f336e593d773337302d683337302d732d6e6f2d676d	2024-07-06 17:53:17.038-05	2024-07-06 17:53:17.038-05
9	Perrito Peluche	Generic	41	Random Series	13.4	wool	f	22	t	\\x68747470733a2f2f6c68332e676f6f676c6575736572636f6e74656e742e636f6d2f70772f41503147637a50793272654968716959764839394e4f4765534436467139325746374665364d6a536f57424977562d357a576855435056656a6a68504b4763576e7a55424174356c4f467246415244305533443347713344327a6770767a366d734c596772394b4a74556f5a66764b7071564535762d576d707766414b5a4a367056653944323532386771535f5a364e713752317532554d784f673d773337302d683337302d732d6e6f2d676d	2024-07-06 17:53:17.038-05	2024-07-06 17:53:17.038-05
10	Garfield	Mattel	90	Another Series	10.9	wool	f	66	f	\\x68747470733a2f2f6c68332e676f6f676c6575736572636f6e74656e742e636f6d2f70772f41503147637a4d7573677234386a357270346e3461495f314f76593169706c7173695a42624655456e3931714b486d56515779594738724f723737713875425363504c5941717145364351785a31623459783978376a436454336f3339645935455157304932344f563251485564536a78565f4b4a495632334b6c365a4f65686a704748546451354b45516b636a4b4a7755317951554341626f383d773337302d683337302d732d6e6f2d676d3f61757468757365723d32	2024-07-06 17:53:17.038-05	2024-07-06 17:53:17.038-05
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

