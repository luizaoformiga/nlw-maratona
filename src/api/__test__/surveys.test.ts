import request from 'supertest';
import { app } from '../app';
 
import createConnection from '../database';

describe("Surveys", () => {
    beforeAll(async() => {
      const connection = await createConnection(); 
      await connection.runMigrations();
    })

    // YES POST
    it("should be able to create a new user", async () => {
        const response = await request(app).post("/surveys").send({
            title: "How are you?",
            description: "lorem ipsum master on high"
        }) 
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("id");
    })


    it("should be able to get all surveys", async () => {
        await request(app).post("/surveys").send({
            title: "title example",
            description: "Description Example2"
        })
        
        const response = await request(app).get("/surveys");

        expect(response.body.length).toBe(2); // tamanho do array seja igual a 2
    })
    // YES DELETE
    // NOT DELETE

    // YES PUT 
    // NOT PUT

    // YES PATCH
    // NOT PATCH
})