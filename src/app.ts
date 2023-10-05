import 'dotenv/config';
import { Server } from './features/presentation/server';

const server = new Server();

server.listen();