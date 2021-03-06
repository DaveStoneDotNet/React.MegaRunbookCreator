//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace STAR.Originations.MRC.DataAccess
{
    using System;
    using System.Collections.Generic;
    
    public partial class RunbookStep
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public RunbookStep()
        {
            this.RunbookStepPbis = new HashSet<RunbookStepPbi>();
            this.Teams = new HashSet<Team>();
            this.Developers = new HashSet<Contact>();
            this.Resources = new HashSet<Contact>();
        }
    
        public int Id { get; set; }
        public Nullable<int> GroupNumber { get; set; }
        public Nullable<int> StepNumber { get; set; }
        public Nullable<int> Duration { get; set; }
        public string Description { get; set; }
        public string Notes { get; set; }
        public Nullable<System.DateTimeOffset> Time { get; set; }
        public string RunbookStepStatusCode { get; set; }
        public string RunbookStepTypeCode { get; set; }
        public Nullable<int> TemplateId { get; set; }
        public Nullable<bool> IsHtml { get; set; }
        public string Name { get; set; }
        public Nullable<int> RfcId { get; set; }
    
        public virtual RunbookStepStatus RunbookStepStatuses { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<RunbookStepPbi> RunbookStepPbis { get; set; }
        public virtual RunbookStepType RunbookStepType { get; set; }
        public virtual RunbookTemplate RunbookTemplate { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Team> Teams { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Contact> Developers { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Contact> Resources { get; set; }
        public virtual Rfc Rfc { get; set; }
    }
}
