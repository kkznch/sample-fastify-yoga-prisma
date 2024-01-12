import SchemaBuilder from '@pothos/core';
import { PrismaClient, Prisma } from '@prisma/client';
import PrismaPlugin from '@pothos/plugin-prisma';
import type PrismaTypes from '@pothos/plugin-prisma/generated';
import WithInputPlugin from '@pothos/plugin-with-input';
import ValidationPlugin from '@pothos/plugin-validation';

export const prisma = new PrismaClient({});

export const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes;
}>({
  plugins: [PrismaPlugin, WithInputPlugin, ValidationPlugin],
  prisma: {
    client: prisma,
    dmmf: Prisma.dmmf,
    filterConnectionTotalCount: true,
  },
  withInput: {
    argOptions: {
      required: true,
    },
  },
  validationOptions: {
    validationError: (zodError, args, context, info) => {
      return zodError;
    },
  },
});

builder.mutationType();
