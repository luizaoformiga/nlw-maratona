import request from 'supertest';
import { app } from '../app';
 
import createConnection from '../database';

describe("Users", () => {
    beforeAll(async() => {
      const connection = await createConnection(); 
      await connection.runMigrations();
    })

    // YES POST
    it("should be able to create a new user", async () => {
        const response = await request(app).post("/users").send({
            email: "user@example.com",
            name: "User example"
        }) 
        expect(response.status).toBe(201);
    })

    // NOT POST
    it("Should not be able create a user with email", async () => {
        const response = await request(app).post("/users").send({
            email: "user@example.com",
            name: "User example"
        }) 
        expect(response.status).toBe(400);
    })

    // YES DELETE
    it("Deletar esse email e usuário", async () => {
        const response = await request(app).delete("/users/:id").send({
            email: "user@example.com",
            name: "User example"
        }) 
        expect(response.status).toBe(200);
    })

    // NOT DELETE
    it("Erro ao deletar esse email e usuário", async () => {
        const response = await request(app).delete("/users/:id").send({
            email: "user@example.com",
            name: "User example"
        }) 
        expect(response.status).toBe(404);
    })

    // YES PUT 
    // NOT PUT

    // YES PATCH
    // NOT PATCH
})