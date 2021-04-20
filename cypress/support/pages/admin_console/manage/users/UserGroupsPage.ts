export default class UserGroupsPage {
  userGroupsTab: string;
  addGroupButton: string;
  joinGroupButton: string;

  constructor() {
    this.userGroupsTab = "user-groups-tab";
    this.addGroupButton = "add-group-button";
    this.joinGroupButton = "join-button";
  }

  goToGroupsTab() {
    cy.getId(this.userGroupsTab).click();

    return this;
  }

  toggleAddGroupModal() {
    cy.getId(this.addGroupButton).click();

    return this;
  }

  joinGroups() {
    cy.getId(this.joinGroupButton).click();

    return this;
  }
}
