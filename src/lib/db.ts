// Mock database for MVP demo
// In production, this would use Prisma with a real database

// Mock users store (in-memory for demo)
const mockUsers: Map<string, { id: string; email: string; password: string; name: string; role: string }> = new Map();

// Add a default admin user
mockUsers.set('tony@vanesasellingcomics.com', {
  id: 'user-1',
  email: 'tony@vanesasellingcomics.com',
  password: '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/X4.G5uUQ/HrFkWy2y', // "admin123"
  name: 'Tony',
  role: 'admin',
});

export const mockDb = {
  user: {
    findUnique: async ({ where }: { where: { email: string } }) => {
      return mockUsers.get(where.email) || null;
    },
    create: async ({ data }: { data: { email: string; password: string; name: string; role: string } }) => {
      const user = {
        id: `user-${mockUsers.size + 1}`,
        ...data,
      };
      mockUsers.set(data.email, user);
      return user;
    },
    count: async () => mockUsers.size,
  },
};

// Export as prisma for compatibility
export const prisma = mockDb;
export default mockDb;
