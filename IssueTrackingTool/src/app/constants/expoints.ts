const API_URL = "/api";

export const Endpoints ={
  login: `/api/login`,
  register: '/api/user/register',
  userGetById: '/api/user',
  refresh: '/api/token/refresh',
  userUpdate: '/api/user/update',
  userSave: '/api/user/save',
  userDelete: '/api/user/delete',
  usersNoGroup: '/api/GroupManager/usersNOgroup',
  user: '/api/user',
  role: '/api/role' ,
  roleDelete: '/api/role/delete',
  roleSave: '/api/role/save',
  roleUpdate: '/api/role/update',
  roleToUser: '/api/role/addtouser',

  group: '/api/GroupManager',
  groupSave: '/api/GroupManager/save',
  groupDelete: '/api/GroupManager/delete',
  groupUsers: '/api/GroupManager/getAllUsers',
  groupDeleteUser: '/api/GroupManager/DelUser',
  groupAddUser: '/api/GroupManager/AddUser',
  groupLeaderChange: '/api/GroupManager/changeLeader',
  groupUpdate: '/api/GroupManager/update',
  groupGetByUsername : '/api/GroupManager/user',
  groupTime: '/api/GroupManager/getTime',

  privs: '/api/role/privs',

  solutions: '/api/IssueDashboard/solution',
  solutionSave: '/api/IssueDashboard/solution',

  statuses: '/api/Extras/Status',
  priorities: '/api/Extras/Priority',

  issueSave: '/api/IssueDashboard/save'

};

