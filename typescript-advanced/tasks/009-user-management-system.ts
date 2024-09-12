type UserRole = "admin" | "editor" | "viewer";

interface User {
  id: string;
  name: string;
  email: string;
  age: number;
  address: string;
  phoneNumber: number;
  role: UserRole;
}

type OptionalUser = Partial<User>;
type RequiredUser = Required<User>;
type UserContactInfo = Pick<User, "name" | "email">;
type UserWithoutAddress = Omit<User, "address">;
type ReadonlyUser = Readonly<User>;

type Permission = "read" | "write" | "edit" | "delete" | "access";

type RolePermissions = {
  [role in UserRole]: Permission[];
};

const rolePermissions: RolePermissions = {
  admin: ["read", "write", "edit", "delete", "access"],
  viewer: ["read", "access"],
  editor: ["edit", "read", "write"],
};

function updateUser(updatedUser: OptionalUser, existingUser: User): User {
  return { ...existingUser, ...updatedUser };
}

function displayContactInfo(userContactInfo: UserContactInfo): string {
  return `Name: ${userContactInfo.name}, Email: ${userContactInfo.email}`;
}

function checkPermission(user: User, permission: Permission): boolean {
  return rolePermissions[user.role].includes(permission);
}
