using System;
using System.Collections.Generic;
using System.Linq;
using ToDoListAPI.EntityClasses;
using ToDoListAPI.Models;

namespace ToDoListAPI.Manager
{
    public class SecurityManager
    {
        public SecurityManager(LogInDbContext context, UserAuthBase auth)
        {
            _LogInDbContext = context;
            _UserAuthBase = auth;
        }

        private LogInDbContext _LogInDbContext = null;
        private UserAuthBase _UserAuthBase = null;
        protected List<UserClaim> GetClaims(Guid userId)
        {
            List<UserClaim> list = new List<UserClaim>();
            try
            {
                list = _LogInDbContext.Claims.Where(u => u.UserId == userId).ToList();
            }
            catch (Exception ex)
            {
                throw new Exception("Not able to retreive claims.", ex);
            }
            return list;
        }

        protected UserAuthBase UserAuthenticationObject(Guid userId, string userName)
        {
            Type _userAuthType = _UserAuthBase.GetType();
            _UserAuthBase.UserId = userId;
            _UserAuthBase.UserName = userName;
            _UserAuthBase.IsAuth = true;

            List<UserClaim> claims = GetClaims(userId);
            foreach (UserClaim claim in claims)
            {
                try
                {
                    _userAuthType.GetProperty(claim.ClaimType).SetValue(_UserAuthBase, Convert.ToBoolean(claim.ClaimValue), null);
                }
                catch { }
            }
            return _UserAuthBase;
        }

        public UserAuthBase ValidateUser(string userName, string password)
        {
            List<UserBase> list = new List<UserBase>();

            try
            {
                list = _LogInDbContext.Users.Where(u => string.Equals(u.UserName, userName) && string.Equals(u.Password, password)).ToList();
                if (list.Count() > 0)
                {
                    _UserAuthBase = UserAuthenticationObject(list[0].UserId, userName);
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Not able to retrieve the user - ", ex);
            }
            return _UserAuthBase;
        }

    }
}
