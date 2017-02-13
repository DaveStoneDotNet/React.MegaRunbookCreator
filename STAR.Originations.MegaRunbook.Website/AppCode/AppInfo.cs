﻿using System;
using System.Reflection;

using STAR.Originations.MegaRunbook.Contracts;

using contracts = STAR.Originations.MegaRunbook.Contracts.Data;

namespace STAR.Originations.MegaRunbook.Website.AppCode
{
    public class AppInfo
    {
        #region GetSystemInfo
        public static Contracts.Data.AppInfo GetSystemInfo()
        {
            var appInfo = new contracts::AppInfo { Sprint = SharedConstants.CurrentSprint };

            try
            {
                var assembly = Assembly.GetExecutingAssembly();
                var assemblyName = assembly.GetName();

                appInfo.Name = assemblyName.Name;
                appInfo.Version = assemblyName.Version.ToString();
                appInfo.BuildDate = new DateTime(2000, 1, 1).AddDays(assemblyName.Version.Build).AddSeconds(2 * assemblyName.Version.Revision).AddHours(1);

                var informationalVersionAttribute = Attribute.GetCustomAttribute(assembly, typeof(AssemblyInformationalVersionAttribute)) as AssemblyInformationalVersionAttribute;
                appInfo.InformationalVersion = informationalVersionAttribute != null ? informationalVersionAttribute.InformationalVersion : String.Empty;
                appInfo.MachineName = AppInfo.GetString(Environment.MachineName);
            }
            catch (Exception ex)
            {
                System.Diagnostics.Debug.WriteLine(ex.Message);
            }

            return appInfo;
        }
        #endregion GetSystemInfo

        #region GetExtendedSystemInfo
        public static Contracts.Data.AppInfo GetExtendedSystemInfo()
        {
            var appInfo = new Contracts.Data.AppInfo();

            try
            {
                var assembly = Assembly.GetExecutingAssembly();
                var assemblyName = assembly.GetName();

                appInfo.Name = assemblyName.Name;
                appInfo.Version = assemblyName.Version.ToString();
                appInfo.BuildDate = new DateTime(2000, 1, 1).AddDays(assemblyName.Version.Build).AddSeconds(2 * assemblyName.Version.Revision);

                appInfo.WindowsUserName = AppInfo.GetStringSafely(() => Environment.UserName);
                appInfo.CLR = AppInfo.GetStringSafely(() => Environment.Version);
                appInfo.OS = AppInfo.GetStringSafely(() => Environment.OSVersion);
                appInfo.UserDomainName = AppInfo.GetStringSafely(() => Environment.UserDomainName);
                appInfo.Is64BitOperatingSystem = AppInfo.GetSafely(() => Environment.Is64BitOperatingSystem);
                appInfo.ProcessorCount = AppInfo.GetSafely(() => Environment.ProcessorCount);

                var computerInfo = new Microsoft.VisualBasic.Devices.ComputerInfo();

                appInfo.TotalPhysicalMemory = AppInfo.GetMemorySafely(computerInfo.TotalPhysicalMemory);
                appInfo.AvailablePhysicalMemory = AppInfo.GetMemorySafely(computerInfo.AvailablePhysicalMemory);

                var informationalVersionAttribute = Attribute.GetCustomAttribute(assembly, typeof(AssemblyInformationalVersionAttribute)) as AssemblyInformationalVersionAttribute;
                appInfo.InformationalVersion = informationalVersionAttribute != null ? informationalVersionAttribute.InformationalVersion : String.Empty;
            }
            catch (Exception ex)
            {
                System.Diagnostics.Debug.WriteLine(ex.Message);
            }

            return appInfo;
        }
        #endregion GetExtendedSystemInfo

        #region GetSafely
        private static T GetSafely<T>(Func<T> fn)
        {
            try
            {
                return fn();
            }
            catch
            {
                return default(T);
            }
        }
        #endregion GetSafely

        #region GetStringSafely
        private static string GetStringSafely<T>(Func<T> fn)
        {
            try
            {
                return fn().ToString();
            }
            catch
            {
                return "ERROR: UNAVAILABLE";
            }
        }
        #endregion GetStringSafely

        #region GetMemorySafely
        private static string GetMemorySafely(ulong memory)
        {
            var memoryText = String.Empty;
            try
            {
                memoryText = String.Format("{0:#.000} GB", memory / Math.Pow(1024, 3));
            }
            catch
            {
                return "ERROR: UNAVAILABLE";
            }
            return memoryText;
        }
        #endregion GetMemorySafely

        #region GetString
        /// <summary>
        /// Called to avoid null reference exceptions. 
        /// </summary>
        /// <param name="text">The text.</param>
        /// <param name="defaultValue"></param>
        /// <returns></returns>
        /// <remarks>
        ///     - Checks if the 'text' parameter is null. 
        ///     - If not null then Trims the 'text' parameter.
        ///     - If not null after trimming then returns the original 'text' parameter.
        ///     - Otherwise returns the 'defaultValue' parameter.
        /// </remarks>
        public static string GetString(string text, string defaultValue = "")
        {
            var defaultText = defaultValue;
            if (!String.IsNullOrEmpty(text?.Trim()))
            {
                defaultText = text.Trim();
            }
            return defaultText;
        }
        #endregion GetString

        #region GetStringInfo
        /// <summary>
        /// Useful for debugging. Returns the word 'NULL', 'EMPTY', 
        /// or the actual value of the 'text' parameter.
        /// </summary>
        /// <param name="text">The text.</param>
        /// <returns></returns>
        public static string GetStringInfo(string text)
        {
            var defaultText = text;
            if (text == null)
            {
                defaultText = "NULL";
            }
            else
            {
                if (String.IsNullOrEmpty(text))
                {
                    defaultText = "EMPTY";
                }
            }
            return defaultText;
        }
        #endregion GetStringInfo
    }
}