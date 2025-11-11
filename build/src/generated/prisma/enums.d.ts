export declare const LeadStatus: {
    readonly New: "New";
    readonly Contacted: "Contacted";
    readonly Qualified: "Qualified";
    readonly Converted: "Converted";
    readonly Unresponsive: "Unresponsive";
    readonly Disqualified: "Disqualified";
    readonly Archived: "Archived";
};
export type LeadStatus = (typeof LeadStatus)[keyof typeof LeadStatus];
export declare const LeadCampaignStatus: {
    readonly New: "New";
    readonly Engaged: "Engaged";
    readonly FollowUp_Scheduled: "FollowUp_Scheduled";
    readonly Contacted: "Contacted";
    readonly Qualified: "Qualified";
    readonly Converted: "Converted";
    readonly Unresponsive: "Unresponsive";
    readonly Disqualified: "Disqualified";
    readonly Re_Engaged: "Re_Engaged";
    readonly Opted_Out: "Opted_Out";
};
export type LeadCampaignStatus = (typeof LeadCampaignStatus)[keyof typeof LeadCampaignStatus];
//# sourceMappingURL=enums.d.ts.map