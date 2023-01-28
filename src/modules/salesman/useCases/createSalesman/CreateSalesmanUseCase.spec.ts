import { prisma } from "../../../../database/prismaClient"
import {hash} from "bcrypt"
import { CreateSalesmanUseCase } from "./CreateSalesmanUseCase";
import bcrypt from "bcrypt"

describe('CreateSalesmanUseCase', () => {
  let findFirstSpy: jest.SpyInstance;
  let hashSpy: jest.SpyInstance;
  let createSpy: jest.SpyInstance;
  
  beforeEach(() => {
    findFirstSpy = jest.spyOn(prisma.salesman, 'findFirst');
    hashSpy = jest.spyOn(bcrypt, 'hash').mockImplementation(() => 'hashed_password123');
    createSpy = jest.spyOn(prisma.salesman, 'create');
  });

  afterEach(() => {
    findFirstSpy.mockReset();
    hashSpy.mockReset();
    createSpy.mockReset();
  });

  it('Should be able to create a new User', async () => {
    const username = "jorge123"
    const password = 'password123'
    const contact = 1234567890
    findFirstSpy.mockResolvedValue(false);
    hashSpy.mockResolvedValue('hashed_password123');
    createSpy.mockResolvedValue({username, password: 'hashed_password123', contact: '1234567890'});

    const createSalesmanUseCase = new CreateSalesmanUseCase();
    const result = await createSalesmanUseCase.execute({username, password, contact});
    expect(findFirstSpy).toBeCalled();
    expect(hashSpy).toBeCalledWith(password, 10);
    expect(createSpy).toBeCalledWith({
      data: {
        username,
        password: 'hashed_password123',
        contact: '1234567890'
      }
    });
    expect(result).toEqual({username, password: 'hashed_password123', contact: '1234567890'});
  });

  it('Should throw an error if username already exist', async () => {
    const username = 'username123'
    const password = 'password123'
    const contact = 1234567890
    findFirstSpy.mockResolvedValue(true);

    const createSalesmanUseCase = new CreateSalesmanUseCase();
    await expect(createSalesmanUseCase.execute({username, password, contact})).rejects.toThrow('Este usuário já esta em uso.');
    expect(findFirstSpy).toBeCalled();
    expect(hashSpy).not.toBeCalled();
    expect(createSpy).not.toBeCalled();
  });
})