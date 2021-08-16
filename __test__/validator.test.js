'use strict';

const {server} = require('../src/server');
const supertest = require('supertest');
const request = supertest(server);


describe ('express server' , ()=> {

  it('shoud check the if the person name is valid and check the 200 status', async()=> {
    //arange
    let param = '/person?name=ibrahem';
    let status = 200;

    //act 
    const response = await request.get(param);
        
    // assert
    expect(response.status).toBe(status);
    expect(response.body).toEqual({
      name:'ibrahem',
    });
  });
  

});