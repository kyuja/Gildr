export default function ManageGuildMembers() {
  const insets = useSafeAreaInsets();

  const [memberList, setMemberList] = React.useState(members);
  const [memberDeleteFlag, setMemberDeleteFlag] = React.useState<number[]>([]);

  const isMarkedForDeletion = (id: number) =>
    memberDeleteFlag.includes(id);

  const toggleMemberDelete = async (id: number) => {
    setMemberDeleteFlag((prev) =>
      prev.includes(id) ? prev.filter((mid) => mid !== id) : [...prev, id]
    );
    await Haptics.selectionAsync();
  };

  const deleteMember = () => {
    setMemberList((prev) =>
      prev.filter((member) => !memberDeleteFlag.includes(member.id))
    );
    setMemberDeleteFlag([]);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={insets.top + 20}
    >
      <View style={styles.screenContainer}>
        <BackAndSettingHeader
          useBack={false}
          backHref={"../chat"}
          useFallbackHref={"../home"}
          settingsHref={"/home"}
        />

        <Pressable style={styles.header}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Beispiel Gildenname
          </Text>
        </Pressable>

        <TextInput
          style={styles.inputBar}
          placeholder="Beschreibung eingeben..."
        />

        <Text style={styles.membersBar}>Mitglieder</Text>

        <View style={{ backgroundColor: "white", borderRadius: 10, padding: 10, marginTop: 10, height: 300 }}>
          <ScrollView>
            {memberList.map((member) => (
              <View
                key={member.id}
                style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    color: isMarkedForDeletion(member.id) ? "gray" : "black",
                  }}
                >
                  {member.name}
                </Text>

                <TouchableOpacity onPress={() => toggleMemberDelete(member.id)}>
                  <Ionicons
                    name="remove-circle"
                    size={40}
                    style={{
                      right: 10,
                      padding: 5,
                      color: isMarkedForDeletion(member.id)
                        ? "maroon"
                        : "black",
                    }}
                  />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
          <Link href="../chat" asChild>
            <TouchableOpacity style={styles.saveButton}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>Abbrechen</Text>
            </TouchableOpacity>
          </Link>

          <TouchableOpacity style={styles.saveButton} onPress={deleteMember}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Bestätigen</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
